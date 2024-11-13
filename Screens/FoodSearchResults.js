import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const FoodSearchResults = () => {
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);

    const handlePressRestaurant = (restaurantId) => {
        if (selectedRestaurants.includes(restaurantId)) {
            setSelectedRestaurants(selectedRestaurants.filter(id => id !== restaurantId));
        } else {
            setSelectedRestaurants([...selectedRestaurants, restaurantId]);
        }
    };

    const filterTags = ['Sort by', 'Freeship', 'Favorite', 'Near you', 'Partner'];
    const restaurants = [
        {
            id: 1,
            name: 'Hana Chicken',
            category: 'Fried Chicken',
            deliveryTime: '15 mins',
            rating: 4.8,
            tags: ['Freeship', 'Near you'],
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/242b2a1b8f76d217bcc8213c1fa70eb6cf9694c7652766998598d2e4ae0a2d08',
            menuItems: [
                {
                    id: 1,
                    name: 'Fried Chicken',
                    price: 10,
                    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4a6bb1441015ffccaadd834a8c0b29f20e1b70b44d47de1e1a4281cc088b614',
                },
                {
                    id: 2,
                    name: 'Fried Chicken & Potatos',
                    price: 26,
                    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/50ade1f2fac238ce850e141a52c5a27ad1ed8664fdd7f10135d7b8b9f6890dc5',
                },
            ],
        },
        {
            id: 2,
            name: 'Bamsu Restaurant',
            category: 'Chicken Salad & Sandwich',
            deliveryTime: '35 mins',
            rating: 4.1,
            tags: ['Freeship', 'Near you'],
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7bce8c728747903d06f676f36d3e201ca12a99086dd4105b6a8c7b8f8aec1265',
            menuItems: [
                {
                    id: 3,
                    name: 'Chicken Sandwich',
                    price: 26,
                    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a890b7c9a7dcb3521dda9b0e749d16bd4d193b7b0bfa400ce2d4379e867ba96',
                },
                {
                    id: 4,
                    name: 'Crunchy Fried Chicken Balls',
                    price: 30,
                    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e84987997d702fae6ef9e138e19176e06a1ab45d411e5534c8e6f27155e083cc',
                },
            ],
        },
    ];

    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>
                {/* SearchBar */}
                <View style={styles.searchBar}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/61aa2767e1a254c23752d80241227a7f3f64782f05193f47f98af2d2526505f6' }}
                        style={styles.searchIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ddb1cc01a0cf44b631140ecded3e9c050a232f70c515f05654db3bfc4366b3c7' }}
                        style={styles.filterIcon}
                        resizeMode="contain"
                    />
                </View>

                {/* FilterTags */}
                <View style={styles.filterTags}>
                    {filterTags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                            {index === 0 && (
                                <Image
                                    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b12e83e80ec154b2b0bd520cf3f5aa632dc233d1cf3bffdf3f28a966514d6602' }}
                                    style={styles.chevronIcon}
                                    resizeMode="contain"
                                />
                            )}
                        </View>
                    ))}
                </View>

                {/* ResultCount */}
                <Text style={styles.resultCount}>
                    359 results for "Fried Chicken"
                </Text>

                {/* RestaurantCards with MenuItems */}
                {restaurants.map((restaurant) => (
                    <View key={restaurant.id}>
                        <TouchableOpacity
                            style={styles.restaurantCard}
                            onPress={() => handlePressRestaurant(restaurant.id)}
                        >
                            <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
                            <View style={styles.restaurantInfo}>
                                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                                <Text style={styles.restaurantCategory}>{restaurant.category}</Text>
                                <View style={styles.restaurantDetails}>
                                    <Text style={styles.detailText}>{restaurant.deliveryTime}</Text>
                                    <Text style={styles.dot}>•</Text>
                                    <Text style={styles.detailText}>{restaurant.rating}</Text>
                                    <Image
                                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02e8393c3df77366556f53f450b99fd6f6ce469f5a44bfc1f0b60f7ebbe0dc7d' }}
                                        style={styles.ratingIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={styles.restaurantTags}>
                                    {restaurant.tags.map((tag, tagIndex) => (
                                        <View key={tagIndex} style={styles.restaurantTag}>
                                            <Text style={styles.restaurantTagText}>{tag}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </TouchableOpacity>

                        {selectedRestaurants.includes(restaurant.id) && (
                            <View style={styles.menuItemsContainer}>
                                {restaurant.menuItems.map((item) => (
                                    <View key={item.id} style={styles.menuItemCard}>
                                        <Image source={{ uri: item.image }} style={styles.menuItemImage} />
                                        <View style={styles.menuItemInfo}>
                                            <Text style={styles.menuItemName}>{item.name}</Text>
                                            <Text style={styles.menuItemPrice}>${item.price}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}

                {/* PromoBanner */}
                <Image
                    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56946e1af81e5f0fea0c4b432a41b76cb746fc808379857638fea930e29dbfde?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                    style={styles.promoBanner}
                    resizeMode="contain"
                />
            </ScrollView>

            {/* TabBar */}
            <View style={styles.tabBar}>
                {[
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/ae84b5d6-4bd0-4d41-a303-d60e88187c2b',
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/c29ae05d-dad6-4826-be81-448fc37844ab',
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/9e8c764f4cc82b960c95bb3e323246d54fe893e5bef844ce14db0dc44133c1a7',
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/4d2a86a3-13b6-48d8-a840-82bfbbea065d',
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/1e1a67b4-10aa-48f7-82b8-f40b7239b6ec',
                ].map((icon, index) => (
                    <Image key={index} source={{ uri: icon }} style={styles.tabIcon} resizeMode="contain" />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 9.35,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 7,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 10,
    },
    filterIcon: {
        width: 28,
        height: 28,
        marginLeft: 10,
    },
    filterTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 21,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 11,
        marginBottom: 11,
        backgroundColor: 'rgba(255, 119, 0, 0.1)',
    },
    tagText: {
        fontSize: 12,
        color: 'rgba(50, 56, 66, 1)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
    },
    chevronIcon: {
        width: 16,
        height: 16,
        marginLeft: 3,
    },
    resultCount: {
        color: 'rgba(50, 56, 66, 1)',
        fontSize: 14,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
        marginTop: 28,
        marginBottom: 28,
    },
    restaurantCard: {
        flexDirection: 'row',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    restaurantImage: {
        width: 90,
        height: 90,
        borderRadius: 6,
    },
    restaurantInfo: {
        marginLeft: 16,
        flex: 1,
    },
    restaurantName: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(23, 26, 31, 1)',
        fontFamily: 'Poppins, sans-serif',
    },
    restaurantCategory: {
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
        marginTop: 4,
    },
    restaurantDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    detailText: {
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
    },
    dot: {
        fontSize: 11,
        color: 'rgba(144, 149, 160, 1)',
        marginHorizontal: 2,
    },
    ratingIcon: {
        width: 12,
        height: 12,
        marginLeft: 2,
    },
    restaurantTags: {
        flexDirection: 'row',
        marginTop: 6,
    },
    restaurantTag: {
        backgroundColor: 'rgba(0, 197, 79, 0.1)',
        borderRadius: 2,
        paddingHorizontal: 6,
        paddingVertical: 1,
        marginRight: 5,
    },
    restaurantTagText: {
        fontSize: 11,
        color: 'rgba(0, 197, 79, 1)',
    },
    menuItemsContainer: {
        justifyContent: 'space-between',
        marginTop: 16,
        marginLeft: 110,
    },
    menuItemCard: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    menuItemImage: {
        width: 60,
        height: 60,
        borderRadius: 3,
    },
    menuItemInfo: {
        marginLeft: 12,
        justifyContent: 'center',
    },
    menuItemName: {
        fontSize: 12,
        color: 'rgba(50, 56, 66, 1)',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
    },
    menuItemPrice: {
        fontSize: 12,
        color: 'rgba(23, 26, 31, 1)',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        marginTop: 4,
    },
    promoBanner: {
        width: '100%',
        aspectRatio: 333.33,
        marginVertical: 24,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
    },
    tabIcon: {
        width: 75,
        aspectRatio: 1.56,
    },
});

export default FoodSearchResults;
