import { View, StyleSheet, Image, Text, ScrollView, image, TouchableOpacity, Picker } from 'react-native';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
const tags = ['Sort by', 'Freeship', 'Favorite', 'Near you', 'Parner'];

const tabIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/285dab10-5953-46ff-ade1-b52a4ea23630?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/5fdca64b-400e-4259-afa7-4d0e15b766b1?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7a6a6eb0eac90e6ce7d3453795b2654a0a89a9f35a2de1c9dd94de0001fc0f32?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0c147cba-8046-4dea-b66a-fe479b7c9845?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7a977687-99a7-4f96-8220-3c62f3d47947?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63"
];

const Screen_02 = ({ navigation, route }) => {
    const { categoryName } = route.params;
    const [restaurantData, setRestaurantData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [sortOrder, setSortOrder] = useState('A-Z');
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    useEffect(() => {
        fetchRestaurants();
    }, [categoryName]);

    const fetchRestaurants = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/restaurants/category/${encodeURIComponent(categoryName)}`);
            setRestaurantData(response.data || []);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    const displayedRestaurants = showAll ? restaurantData : restaurantData.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const handleSortChange = (value) => {
        setSortOrder(value);
        setShowSortDropdown(false);
    };
    const sortRestaurants = (restaurants) => {
        return restaurants.sort((a, b) => {
            if (sortOrder === 'A-Z') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
    };
    const handleTagPress = (tag) => {
        setSelectedTags(prevTags => {
            if (prevTags.includes(tag)) {
                return prevTags.filter(t => t !== tag);
            } else {
                return [...prevTags, tag];
            }
        });
    };
    const filterRestaurantsByTags = (restaurants) => {
        if (selectedTags.length === 0 || selectedTags.includes('Sort by')) {
            return restaurants;
        }
        return restaurants.filter(restaurant => selectedTags.every(tag => restaurant.tags.includes(tag)));
    };

    const handleRestaurantPress = (restaurant) => {
        navigation.navigate('RestaurantDetailsScreen', { restaurant });
    };

    const filteredRestaurants = filterRestaurantsByTags(displayedRestaurants);
    const sortedRestaurants = sortRestaurants(filteredRestaurants);
    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b12fecf66736d8b0da1cd0923809c8065d2cf95512129d8f14139c0c71175eda?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                        style={styles.backButton}
                        resizeMode="contain"
                    />
                    <Text style={styles.headerTitle}>{categoryName}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.filterContainer}>
                {tags.map((tag, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleTagPress(tag)}
                        style={[
                            styles.tagContainer,
                            selectedTags.includes(tag) && styles.selectedTagContainer, // Áp dụng màu nếu được chọn
                        ]}
                    >
                        <Text
                            style={[
                                styles.tagText,
                                selectedTags.includes(tag) && styles.selectedTagText, // Đổi màu chữ nếu được chọn
                            ]}
                        >
                            {tag}
                        </Text>
                        {tag === 'Sort by' && (
                            <TouchableOpacity onPress={toggleSortDropdown}>
                                <Image
                                    source={{
                                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b12e83e80ec154b2b0bd520cf3f5aa632dc233d1cf3bffdf3f28a966514d6602?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
                                    }}
                                    style={styles.sortIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        )}
                    </TouchableOpacity>
                ))}
                {showSortDropdown && (
                    <Picker
                        selectedValue={sortOrder}
                        onValueChange={handleSortChange}
                        style={styles.picker}
                    >
                        <Picker.Item label="A-Z" value="A-Z" />
                        <Picker.Item label="Z-A" value="Z-A" />
                    </Picker>
                )}
            </View>
            {sortedRestaurants.map((restaurant, index) => (
                <TouchableOpacity key={index} onPress={() => handleRestaurantPress(restaurant)}>
                    <View style={styles.cardContainer}>
                        <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} resizeMode="cover" />
                        <View style={styles.infoContainer}>
                            <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            <Text style={styles.restaurantDescription}>{restaurant.description}</Text>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailText}>{restaurant.time}</Text>
                                <Text style={styles.dotSeparator}>•</Text>
                                <Text style={styles.detailText}>{restaurant.namerating}</Text>
                                <Image
                                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f51acebf2eb12aae657b79c7946b5f7d1a74100e92ade33153f5ecbf824c953?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                                    style={styles.ratingIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.tagsContainer}>
                                {restaurant.tags.map((tag, index) => (
                                    <View key={index} style={styles.tag}>
                                        <Text style={styles.tagText}>{tag}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.seeAllButton} onPress={toggleShowAll}>
                <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
            <View style={styles.container1}>
                <Image
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a649270-4f5e-441b-ba23-7f67a77cbdd1?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                    style={styles.bannerImage}
                    resizeMode="contain"
                />
                <View style={styles.headerContainer1}>
                    <Text style={styles.sectionTitle}>Recommended for you</Text>
                    <Text style={styles.viewAllText}>View all</Text>
                </View>

                <View style={styles.cardContainer} >
                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/349ddb97ca3bdad2f346cf06afd8e28d435512158fa6521c8fcc7ed9439ec67d?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.restaurantImage} resizeMode="cover" />
                    <View style={styles.infoContainer}>
                        <Text style={styles.restaurantName}>Mr. John Tapas</Text>
                        <Text style={styles.restaurantDescription}>Best Tapas in Town</Text>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.detailText}>35 mins</Text>
                            <Text style={styles.dotSeparator}>•</Text>
                            <Text style={styles.detailText}>4.1</Text>
                            <Image
                                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f51acebf2eb12aae657b79c7946b5f7d1a74100e92ade33153f5ecbf824c953?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                                style={styles.ratingIcon}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.tagsContainer}>

                            <View style={styles.tag}>
                                <Text style={styles.tagText}>Freeship</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.tabBarContainer}>
                {tabIcons.map((icon, index) => (
                    <Image
                        key={index}
                        source={{ uri: icon }}
                        style={styles.tabIcon}
                        resizeMode="contain"
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default Screen_02

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 9.35,
    },
    seeAllButton: {
        alignSelf: 'center',
        marginTop: 32,
        width: '100%',
        maxWidth: 335,
        paddingVertical: 7,
        paddingHorizontal: 70,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgba(255, 119, 0, 1)',
    },
    seeAllText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(255, 119, 0, 1)',
        textAlign: 'center',
    },

    selectedTagContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(255, 119, 0, 1)',// Màu nền khi được chọn
    },
    selectedTagText: {
        color: 'rgba(255, 119, 0, 1)',// Màu chữ khi được chọn
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    backButton: {
        width: 44,
        aspectRatio: 1,
        borderRadius: 4,
    },
    headerTitle: {
        marginLeft: 10,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        color: 'rgba(23, 26, 31, 1)',
        fontWeight: '600',
    },
    filterContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 20,
        flexWrap: 'wrap',
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 11,
        marginBottom: 8,
        backgroundColor: 'rgba(255, 119, 0, 0.1)',
    },
    tagText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(50, 56, 66, 1)',
    },
    sortIcon: {
        width: 16,
        height: 16,
        marginLeft: 3,
    },
    picker: {
        width: 150,
        height: 50,
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    restaurantImage: {
        width: 90,
        aspectRatio: 1,
        borderRadius: 6,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 16,
    },
    restaurantName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(23, 26, 31, 1)',
    },
    restaurantDescription: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
        marginTop: 4,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    detailText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
    },
    dotSeparator: {
        marginHorizontal: 4,
        fontSize: 11,
        color: 'rgba(144, 149, 160, 1)',
    },
    ratingIcon: {
        width: 12,
        height: 12,
        marginLeft: 2,
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    tag: {
        backgroundColor: 'rgba(0, 197, 79, 0.1)',
        borderRadius: 2,
        paddingHorizontal: 6,
        paddingVertical: 1,
        marginRight: 5,
    },
    tagText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        color: 'rgba(0, 197, 79, 1)',
    },
    container1: {
        marginTop: 40,
    },
    bannerImage: {
        width: '100%',
        aspectRatio: 2.64,
        borderRadius: 4,
    },
    headerContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(50, 56, 66, 1)',
    },
    viewAllText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        color: 'rgba(144, 149, 160, 1)',
    },
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: '#fff',
    },
    tabIcon: {
        width: 75,
        aspectRatio: 1.56,
    },
})