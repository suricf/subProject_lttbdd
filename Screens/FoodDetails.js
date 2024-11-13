import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const FoodDetails = () => {
    const [size, setSize] = useState('S');
    const [toppings, setToppings] = useState([]);
    const [spiciness, setSpiciness] = useState('No');
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState('');

    const basePrice = 15;
    const sizePrices = { S: 0, M: 5, L: 10 };
    const toppingPrices = { Corn: 2, 'Cheese Cheddar': 5, 'Salted egg': 10 };

    const calculateTotalPrice = () => {
        const sizePrice = sizePrices[size];
        const toppingPrice = toppings.reduce((sum, topping) => sum + toppingPrices[topping], 0);
        return (basePrice + sizePrice + toppingPrice) * quantity;
    };

    const toggleTopping = (topping) => {
        setToppings(prevToppings =>
            prevToppings.includes(topping)
                ? prevToppings.filter(t => t !== topping)
                : [...prevToppings, topping]
        );
    };




    const ToppingOption = ({ name, price }) => (
        <TouchableOpacity
            style={styles.toppingOption}
            onPress={() => toggleTopping(name)}
            accessibilityLabel={`Select topping ${name}`}
            accessibilityState={{ checked: toppings.includes(name) }}
        >
            <View style={[styles.checkbox, toppings.includes(name) && styles.checkboxSelected]}>
                {toppings.includes(name) && <View style={styles.checkboxInner} />}
            </View>
            <Text style={styles.toppingName}>{name}</Text>
            <Text style={styles.toppingPrice}>+${price}</Text>
        </TouchableOpacity>
    );



    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1208389eef84c0d16a287385b9c71f59ecf8dbb9796e95202b65f54127a752a?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.headerImage} resizeMode="cover" />
                <TouchableOpacity style={styles.backButton} accessibilityLabel="Go back">
                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/20083ffa5b2467345a2dd3ba30a44b076ed3c523d66f1fc2af73d65a0d5020b5?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.backIcon} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.titlePriceContainer}>
                    <View>
                        <Text style={styles.title}>Fried Chicken</Text>
                        <Text style={styles.subtitle}>Crispy fried wings, thigh</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>${basePrice}</Text>
                        <Text style={styles.priceSubtext}>Base price</Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View style={styles.sizeSelector}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Size</Text>
                            <Text style={styles.sectionSubtitle}>(Pick 1)</Text>
                        </View>
                        {['S', 'M', 'L'].map((sizeOption) => (
                            <TouchableOpacity
                                key={sizeOption}
                                style={styles.radioButton}
                                onPress={() => setSize(sizeOption)}
                                accessibilityLabel={`Select size ${sizeOption}`}
                                accessibilityState={{ checked: size === sizeOption }}
                            >
                                <View style={[styles.radio, size === sizeOption && styles.radioSelected]}>
                                    {size === sizeOption && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.radioLabel}>{sizeOption}</Text>
                                {sizePrices[sizeOption] > 0 && (
                                    <Text style={styles.radioPrice}>+${sizePrices[sizeOption]}</Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.toppingSection}>
                        <Text style={styles.sectionTitle}>Topping</Text>
                        <Text style={styles.sectionSubtitle}>(Optional)</Text>
                        <ToppingOption name="Corn" price={2} />
                        <ToppingOption name="Cheese Cheddar" price={5} />
                        <ToppingOption name="Salted egg" price={10} />
                    </View>
                    <View style={styles.spicinessSelector}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Spiciness</Text>
                            <Text style={styles.sectionSubtitle}>(Pick 1)</Text>
                        </View>
                        {['No', 'Hot', 'Very hot'].map((level) => (
                            <TouchableOpacity
                                key={level}
                                style={styles.radioButton}
                                onPress={() => setSpiciness(level)}
                                accessibilityLabel={`Select spiciness ${level}`}
                                accessibilityState={{ checked: spiciness === level }}
                            >
                                <View style={[styles.radio, spiciness === level && styles.radioSelected]}>
                                    {spiciness === level && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.radioLabel}>{level}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.noteSection}>
                        <Text style={styles.noteLabel}>Note for restaurant</Text>
                        <TextInput
                            style={styles.noteInput}
                            placeholder="Special note"
                            multiline
                            numberOfLines={3}
                            value={note}
                            onChangeText={setNote}
                            accessibilityLabel="Add a note for the restaurant"
                        />
                    </View>
                    <View style={styles.quantitySelector}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                            accessibilityLabel="Decrease quantity"
                        >
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => setQuantity(quantity + 1)}
                            accessibilityLabel="Increase quantity"
                        >
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => { }}
                    accessibilityLabel={`Add to cart, total price $${calculateTotalPrice()}`}
                >
                    <Text style={styles.addToCartText}>Add to cart (${calculateTotalPrice()})</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 1.79,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 20,
        backgroundColor: 'white',
        borderRadius: 14,
        padding: 7,
    },
    backIcon: {
        width: 14,
        height: 14,
    },
    contentContainer: {
        padding: 20,
    },
    titlePriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#171A1F',
    },
    subtitle: {
        fontSize: 14,
        color: '#9095A0',
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#171A1F',
        textAlign: 'right',
    },
    priceSubtext: {
        fontSize: 14,
        color: '#9095A0',
        textAlign: 'right',
    },
    optionsContainer: {
        marginTop: 20,
    },
    sizeSelector: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#323842',
        marginRight: 5,
    },
    sectionSubtitle: {
        fontSize: 12,
        color: '#9095A0',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radio: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#565E6C',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioSelected: {
        borderColor: '#007AFF',
    },
    radioInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#007AFF',
    },
    radioLabel: {
        fontSize: 14,
        color: '#171A1F',
    },
    radioPrice: {
        fontSize: 14,
        color: '#9095A0',
        marginLeft: 'auto',
    },
    toppingSection: {
        marginTop: 20,
    },
    toppingOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#9095A0',
        borderRadius: 4,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxSelected: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: 'white',
    },
    toppingName: {
        fontSize: 14,
        color: '#171A1F',
        flex: 1,
    },
    toppingPrice: {
        fontSize: 14,
        color: '#9095A0',
    },
    spicinessSelector: {
        marginTop: 20,
        marginBottom: 20,
    },
    noteSection: {
        marginTop: 20,
    },
    noteLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#424955',
        marginBottom: 5,
    },
    noteInput: {
        borderWidth: 1,
        borderColor: '#BCC1CA',
        borderRadius: 4,
        padding: 10,
        height: 80,
        textAlignVertical: 'top',
    },
    quantitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    quantityButton: {
        width: 40,
        height: 40,
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    addToCartButton: {
        backgroundColor: '#007AFF',
        borderRadius: 3,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    addToCartText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default FoodDetails;