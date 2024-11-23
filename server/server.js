const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const url = 'mongodb://localhost:27017';
const port = 3000;
const path = require('path');
const multer = require('multer');

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to server'))
    .catch(err => console.error(err));

// Define user schema
const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    address: [{
        type: { type: String, enum: ['Home', 'Work'], required: true },
        text: { type: String, required: true }
    }]
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });
// Create user model
const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const avatar = 'http://localhost:3000/uploads/default.png';

    if (!username || !email || !password) {
        return res.status(400).send('Username, email, and password are required');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword, avatar });

    try {
        await user.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(500).send('Error registering new user');
    }
});
const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    time: { type: String, required: true },
    rating: { type: Number, required: true },
    tags: { type: [String], required: true },
    recommend: { type: Boolean, required: true },
    category: { type: String, required: true }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
app.post('/restaurants', upload.single('image'), (req, res) => {
    const { name, time, rating, tags, recommend, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const newRestaurant = new Restaurant({
        name,
        image,
        time,
        rating,
        tags: tags.split(','), // Assuming tags are sent as a comma-separated string
        recommend,
        category
    });

    newRestaurant.save()
        .then(restaurant => res.status(201).json(restaurant))
        .catch(err => res.status(400).json({ error: err.message }));
});
const restaurantDetailsSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true },
    rating: { type: String, required: true },
    reviews: { type: String, required: true },
    category: { type: String, required: true }
});

const RestaurantDetails = mongoose.model('RestaurantDetails', restaurantDetailsSchema);
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {

        return res.status(400).send('Email and password are required');
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid password');
        }

        res.status(200).json({
            message: 'Login successful',
            user: {
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                _id: user._id,
                address: user.address
            }
        });
    } catch (err) {
        res.status(500).send('Error logging in');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/restaurants', (req, res) => {
    Restaurant.find()
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(500).json({ error: err.message }));
});
app.post('/restaurantDetails', (req, res) => {
    const { restaurantId, image, name, description, price, rating, reviews, category } = req.body;

    const newRestaurantDetail = new RestaurantDetails({
        restaurantId,
        image,
        name,
        description,
        price,
        rating,
        reviews,
        category
    });

    newRestaurantDetail.save()
        .then(detail => res.status(201).json(detail))
        .catch(err => res.status(400).json({ error: err.message }));
});
app.get('/restaurantDetails/:restaurantId', (req, res) => {
    const { restaurantId } = req.params;
    RestaurantDetails.find({ restaurantId })
        .then(details => res.json(details))
        .catch(err => res.status(500).json({ error: err.message }));
});
app.get('/restaurants/category/:category', (req, res) => {
    const { category } = req.params;
    const decodedCategory = decodeURIComponent(category);
    Restaurant.find({ category: decodedCategory })
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(500).json({ error: err.message }));
});
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
