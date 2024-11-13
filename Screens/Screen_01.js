
import { View, StyleSheet, Image, Text, ScrollView, TextInput, TouchableOpacity, FlatList, CheckBox } from 'react-native';
import React from 'react'


const CategoryItem = ({ name, image }) => (
    <View style={styles.categoryItem}>
        {image ? (
            <Image source={{ uri: image }} style={styles.categoryImage} resizeMode="contain" />
        ) : (
            <View style={styles.categoryImagePlaceholder} />
        )}
        <Text style={styles.categoryName}>{name}</Text>
    </View>
);
const CollectionItem = ({ name, image }) => (
    <View style={styles.collectionItem}>
        <Image source={{ uri: image }} style={styles.collectionImage} resizeMode="contain" />
        <Text style={styles.collectionName}>{name}</Text>
    </View>
);
const RecommendedItem = ({ item }) => (
    <View style={styles.recommendedItem}>
        <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="cover" />
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemDetails}>
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemDot}>•</Text>
            <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3363d283fc9e480e6d038389d5c9028a233452a0ca97f48dfe881c2b2b36e8cf?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }} style={styles.ratingIcon} resizeMode="contain" />
            <Text style={styles.itemRating}>{item.rating}</Text>
        </View>
        {item.tags.length > 0 && (
            <View style={styles.tagContainer}>
                {item.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
                <CheckBox></CheckBox>
            </View>
        )}
    </View>
);
const SaleItem = ({ item }) => (
    <View style={styles.saleItem}>
        <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="cover" />
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemDetails}>
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemDot}>•</Text>
            <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/780c1aee710aa1c231fecd14abb3b4ea40c976c122519149851ea9813547f6ed?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }} style={styles.ratingIcon} resizeMode="contain" />
            <Text style={styles.itemRating}>{item.rating}</Text>
        </View>
        <View style={styles.tag}>
            <Text style={styles.tagText}>{item.tag}</Text>
        </View>
    </View>
);
const recommendedItems = [
    {
        name: 'Bamsu Restaurant',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0604637a9709cffcf4d5886d9b7c5b53cc44f55d4ee9876cb058824f5b790339?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        time: '20 mins',
        rating: 4.1,
        tags: [],
    },
    {
        name: "B'Fresh Coffee",
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e294e21c63c09c94e5a86e2a449830fb78a99fd2c5e535857166a814eb8e9724?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        time: '30 mins',
        rating: 4.5,
        tags: ['Freeship', 'Near you'],
    },
    {
        name: 'Loran Seafood',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/588f617760d5e2de4d98dfe83f8df3b856aaad569750e2709a507914f9972f28?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        time: '30 mins',
        rating: 4.3,
        tags: ['Deal $1', 'Freeship'],
    },
];
const categories = [
    { name: 'Rice', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2d703365741d55faf67baa213173b790639e0d700f1d5e674dcf35b45b6eac1e?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'Healthy', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f4d4efad1da1acc5a52b0adbc1e42a6d2b70390cd547b43f81dd6f3763533e98?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'Drink', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/72ac6503aba0d884c32f85c33890c77290357d4755f2ba1607301ad9f3373416?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'Fastfood', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb12bb31bdb03955e70969f2e2d5627942d8cd34f22b1077b9ac7ef64776f1db?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'Snacks', image: '' },
];
const collections = [
    { name: 'FREESHIP', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/115a02cfe682a7b57a9c40ad20f20acc9a2cb2e407a755bf5656b8592bc650d9?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'DEAL $1', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f695f4092290dfdbde312a8d94c6231a99b35a8af73a15805f05863821603143?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'NEAR YOU', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4313fd2293d4cbeab7a859309a93fba49282aa2cef0ec8e2f2d00ea7d732790d?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
    { name: 'POPULAR', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b390c6a55bdf39f60c448889594c9479179806fc37029807ab032c734a0508af?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' },
];
const saleItems = [
    {
        name: 'Laura Green',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e870013a61528cb9b4006011ad3b7dacb2801750364ec217b5c1ed21dee9b511?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        time: '30 mins',
        rating: 4.2,
        tag: 'Deal $1',
    },
    {
        name: 'Little Milk',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0bc285ccf278abbb6772fd15ad02af7358d77ab1121613f900b6539002052062?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        time: '15 mins',
        rating: 4.8,
        tag: 'Freeship',
    },
    {
        name: "Pasta E'moize",
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3a2b178ab96d0ab59153238951eb07f340629c816b8e6cea10630566404a684d?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        time: '30 mins',
        rating: 4.5,
        tag: 'Deal $1',
    },

];
const tabIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/21fe1473-cdef-45df-b4dd-5f6bd5d41e70?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/3ed1d9f7-5a3b-4f53-8065-9f4cda50ab6e?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d4f949a29c89ecefdde2ef60f3a104114aee2db6d1897d4334b70f3dabb4f7df?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/087afa77-ec59-458b-a0a7-c9bc8676fc85?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/69779f34-6ba2-4cac-8924-a4332915ee6e?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
];
const Screen_01 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>

                    <View style={styles.headerContent}>
                        <View style={styles.locationContainer}>
                            <Image
                                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d09f5b3635403846a9e8e35d200ec7d4e26a4f04313ea4617629c755fd153b76?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                                style={styles.locationIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.locationText}>Home</Text>
                        </View>
                        <View style={styles.searchContainer}>
                            <Image
                                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eda945759b3b0cb12ff2db569d534d4f6fd5bccf27dfad63d2473475a5193ca6?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                                style={styles.searchIcon}
                                resizeMode="contain"
                            />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search"
                                placeholderTextColor="rgba(188, 193, 202, 1)"
                            />
                        </View>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
                    {categories.map((category, index) => (
                        <CategoryItem key={index} name={category.name} image={category.image} />
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.voucherBanner}>
                    <View style={styles.voucherContent}>
                        <Image
                            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bde6bc8f651cf61321ec0099e2cf4be63eebb6c22290de91d939adee01da3550?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                            style={styles.giftIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.voucherText}>You have 5 voucher here</Text>
                    </View>
                    <Image
                        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/564d3ec2373844b25e48fbb25ff8bdc1f8d76d4e3428ef9aef0ee1649c803b5e?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                        style={styles.chevronIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.collectionSection}>
                    <Text style={styles.sectionTitle}>Collections</Text>
                    <View style={styles.collectionGrid}>
                        {collections.map((collection, index) => (
                            <CollectionItem key={index} name={collection.name} image={collection.image} />
                        ))}
                    </View>
                </View>
                <View style={styles.recommendedSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recommended for you</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={recommendedItems}
                        renderItem={({ item }) => <RecommendedItem item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.recommendedList}
                    />
                </View>
                <View style={styles.saleSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Sale up to 50%</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={saleItems}
                        renderItem={({ item }) => <SaleItem item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.saleList}
                    />
                </View>
            </ScrollView>
            <View style={styles.tabBar}>
                {tabIcons.map((icon, index) => (
                    <TouchableOpacity key={index} style={styles.tabItem} onPress={() => { navigation.navigate("Screen_02") }}>
                        <Image source={{ uri: icon }} style={styles.tabIcon} resizeMode="contain" />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default Screen_01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        width: '100%',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 9.35,
    },
    headerContent: {
        padding: 20,
        paddingTop: 8,
        paddingBottom: 17,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    locationIcon: {
        width: 24,
        aspectRatio: 1,
        marginRight: 8,
    },
    locationText: {
        fontFamily: 'Poppins, sans-serif',
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '500',
        fontSize: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        padding: 9,
    },
    searchIcon: {
        width: 20,
        aspectRatio: 1,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 1)',
    },
    categoryList: {
        marginTop: 24,
        paddingHorizontal: 20,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    categoryImage: {
        width: 66,
        aspectRatio: 1,
        borderRadius: 33,
    },
    categoryImagePlaceholder: {
        width: 66,
        aspectRatio: 1,
        borderRadius: 33,
        backgroundColor: '#F3F4F6',
    },
    categoryName: {
        marginTop: 4,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        color: 'rgba(144, 149, 160, 1)',
        textAlign: 'center',
    },
    voucherBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 119, 0, 0.1)',
        borderRadius: 4,
        marginHorizontal: 20,
        marginTop: 24,
        padding: 12,
    },
    voucherContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    giftIcon: {
        width: 14,
        aspectRatio: 1,
        marginRight: 6,
    },
    voucherText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(255, 119, 0, 1)',
    },
    chevronIcon: {
        width: 14,
        aspectRatio: 1,
    },
    collectionSection: {
        marginTop: 28,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(50, 56, 66, 1)',
        marginBottom: 12,
    },
    collectionGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    collectionItem: {
        width: '48%',
        marginBottom: 12,
        borderRadius: 6,
        borderColor: 'rgba(243, 244, 246, 1)',
        borderWidth: 1,
        overflow: 'hidden',
    },
    collectionImage: {
        width: '100%',
        aspectRatio: 2,
    },
    collectionName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(86, 94, 108, 1)',
        textAlign: 'center',
        paddingVertical: 8,
    },
    recommendedSection: {
        marginTop: 28,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(50, 56, 66, 1)',
    },
    viewAllText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        color: 'rgba(144, 149, 160, 1)',
    },
    recommendedList: {
        paddingLeft: 20,
    },
    recommendedItem: {
        width: 150,
        marginRight: 16,
    },
    itemImage: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 8,
    },
    itemName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(23, 26, 31, 1)',
        marginTop: 4,
    },
    itemDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    itemTime: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
    },
    itemDot: {
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
        marginHorizontal: 4,
    },
    ratingIcon: {
        width: 12,
        aspectRatio: 1,
        marginRight: 2,
    },
    itemRating: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 4,
    },
    tag: {
        backgroundColor: 'rgba(0, 189, 214, 0.1)',
        borderRadius: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 4,
        marginBottom: 4,
    },
    tagText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 10,
        color: 'rgba(0, 189, 214, 1)',
    },
    saleSection: {
        marginTop: 28,
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(50, 56, 66, 1)',
    },
    viewAllText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        color: 'rgba(144, 149, 160, 1)',
    },
    saleList: {
        paddingLeft: 20,
    },
    saleItem: {
        width: 150,
        marginRight: 16,
    },
    itemImage: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 8,
    },
    itemName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(23, 26, 31, 1)',
        marginTop: 4,
    },
    itemDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    itemTime: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
    },
    itemDot: {
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
        marginHorizontal: 4,
    },
    ratingIcon: {
        width: 12,
        aspectRatio: 1,
        marginRight: 2,
    },
    itemRating: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
    },
    tag: {
        backgroundColor: 'rgba(0, 197, 79, 0.1)',
        borderRadius: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        marginTop: 4,
    },
    tagText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 10,
        color: 'rgba(0, 197, 79, 1)',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
    },
    tabItem: {
        alignItems: 'center',
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
})