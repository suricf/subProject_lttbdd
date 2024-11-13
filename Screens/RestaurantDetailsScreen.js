import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, FlatList, TouchableOpacity } from 'react-native';

const RestaurantDetailsScreen = () => {
    const infoItems = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/28be04b8f77cc6be4039e2b2ebcb22287d3f9afc9fa9e09a9da94d5bcce09952?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", text: "4.5 (289 reviews)" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfdd49c3fda2147f6a4db8a615f6aa507b0a048521ad1afc81d8e1d42454bbf0?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", text: "2 discount voucher for restaurant" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da7efe2bf225eff6ee5d0913c21cb435a4d8454dba554ac65b996ab75f67127b?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", text: "Delivery on 20 mins" },
    ];

    const menuItems = [
        { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f67bd8b7c0157c6f1edfaa236039030323daa2e16f7ff9c45ce6b666bf40fc96?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", name: "Fried Chicken", rating: "4.5", reviews: "99", price: "15" },
        { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2db1749bc1563feb7065caf1a400c3ac5f57df598505d90a235ca9ad89e9b880?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", name: "Chicken Salad", rating: "4.5", reviews: "99", price: "15" },
        { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/89bfa0023ec443813338f156d98fc21446963dbf898af0f79bf36e823e0a84c3?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", name: "Spicy Chicken", rating: "4.5", reviews: "99", price: "15" },
        { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2df0bd13773166556e268c94a831498a5252824e10bde17e8dd90cee28fd79cc?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63", name: "Fried Potatos", rating: "4.5", reviews: "99", price: "15" },
    ];

    const tabIcons = [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cef1ec3a-a1f4-4232-88d6-347f8aa85557?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd1eb5e-1d58-44c7-b380-410b19bfb541?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/18a1075980b632f912afc0ad308e40be9e12f782602ce6b688c0a32066a94a8d?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/979d53f7-da5f-4767-8865-747062950107?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7d5fa92d-d2fc-46be-9961-fcfb921e4896?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63"
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/60a81d0c88d7351434c126243467535a9a1302cf1193ab7e2dd5c7f35deda1f4?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.headerImage} resizeMode="contain" />
                <View style={styles.headerInfo}>
                    <View style={styles.tagContainer}>
                        <View style={[styles.tag, { backgroundColor: 'rgba(17, 123, 52, 1)' }]}>
                            <Text style={styles.tagText}>Deal $1</Text>
                        </View>
                        <View style={[styles.tag, { backgroundColor: 'rgba(255, 119, 0, 1)' }]}>
                            <Text style={styles.tagText}>Near you</Text>
                        </View>
                    </View>
                    <Text style={styles.restaurantName}>Hana Chicken</Text>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailItem}>
                            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/85828dd50366238c81c911619dde04c5c91227ebd9b139b65574a21ac726ad65?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailText}>6am - 9pm</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4848eeaa1a6be2a2aa9c4ab4e536bc41be421b6dba10c738e1c877679ca02f1?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailText}>2 km</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8b93a38f980063515832fd62e7e3ca4001f3a9d7fafef750469f801dd8c6ba1?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailText}>$5 - $50</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.infoSection}>
                    {infoItems.map((item, index) => (
                        <View key={index} style={styles.infoItem}>
                            <View style={styles.infoContent}>
                                <Image source={{ uri: item.icon }} style={styles.infoIcon} resizeMode="contain" />
                                <Text style={styles.infoText}>{item.text}</Text>
                            </View>
                            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a3d98c601bfa2ce1a959b972f14c4f4dd48b14d6ec98f8695c7c15db1cfeb4f?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.chevronIcon} resizeMode="contain" />
                        </View>
                    ))}
                </View>
                <View style={styles.menuSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>For you</Text>
                        <Text style={styles.viewAll}>View all</Text>
                    </View>
                    <FlatList
                        data={menuItems}
                        renderItem={({ item }) => (
                            <View style={styles.menuItem}>
                                <Image source={{ uri: item.image }} style={styles.menuItemImage} resizeMode="contain" />
                                <Text style={styles.menuItemName}>{item.name}</Text>
                                <View style={styles.menuItemDetails}>
                                    <View style={styles.ratingContainer}>
                                        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e81237614b3c01b8169734092d82dc94af8a60662a9588b1bf2d53ce9430593?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.starIcon} resizeMode="contain" />
                                        <Text style={styles.ratingText}>{item.rating} ({item.reviews})</Text>
                                    </View>
                                    <Text style={styles.priceText}>${item.price}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.name}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.sectionTitle}>Menu</Text>
                    <View style={styles.menuItemLarge}>
                        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1f72e18c7c1497913a962583a4ea2a01e696cbdfafa12f45995a06c1181dfc9?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.menuItemLargeImage} resizeMode="contain" />
                        <View style={styles.menuItemLargeInfo}>
                            <Text style={styles.menuItemLargeName}>Sauté Chicken Rice</Text>
                            <Text style={styles.menuItemLargeDescription}>Sauté chicken, Rice</Text>
                            <View style={styles.menuItemLargeDetails}>
                                <Text style={styles.priceText}>$15</Text>
                                <View style={styles.ratingContainer}>
                                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce03554f63e59e69c56975d57ee9c2ac1049af1a0fae6ab65a9ea345bec40ad7?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.starIcon} resizeMode="contain" />
                                    <Text style={styles.ratingText}>4.5 (99)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menuItemLarge}>
                        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a8e12e8f63b7086f623aa8d3f3b520878eeaf3d02c3f2e773eea26696b1b2ed?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.menuItemLargeImage} resizeMode="contain" />
                        <View style={styles.menuItemLargeInfo}>
                            <Text style={styles.menuItemLargeName}>Chicken Burger</Text>
                            <Text style={styles.menuItemLargeDescription}>Fried chicken, Cheese & Burger</Text>
                            <View style={styles.menuItemLargeDetails}>
                                <Text style={styles.priceText}>$15</Text>
                                <View style={styles.ratingContainer}>
                                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce03554f63e59e69c56975d57ee9c2ac1049af1a0fae6ab65a9ea345bec40ad7?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.starIcon} resizeMode="contain" />
                                    <Text style={styles.ratingText}>4.5 (99)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.seeAllButton}>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reviewSection}>
                    <Text style={styles.sectionTitle}>Reviews</Text>
                    <View style={styles.reviewItem}>
                        <View style={styles.reviewHeader}>
                            <View style={styles.reviewUser}>
                                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e55cb63d516b9673e371fe208a201df1dcf8f191a46148c38bbb38ac6be64c5?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.avatar} />
                                <View>
                                    <Text style={styles.userName}>Jinny Oslin</Text>
                                    <Text style={styles.reviewTime}>A day ago</Text>
                                </View>
                            </View>
                            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/660fd02d0c033f6e4f89d45ec2ab1d80b834e65aee52cfe67afc7f017ad4eb87?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.ratingStars} />
                        </View>
                        <Text style={styles.reviewText}>Quick delivery, good dishes. I love the chicken burger.</Text>
                    </View>
                    <View style={styles.viewAllContainer}>
                        <Text style={styles.viewAll}>View all</Text>
                        <View style={[styles.reviewItem, styles.reviewItemCompact]}>
                            <View style={styles.reviewHeader}>
                                <View style={styles.reviewUser}>
                                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/226c51290d0f05d3e5e9c08082a1bbd17298d6d0fd1a605b53da4f6b4b60f99a?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.avatar} />
                                    <View>
                                        <Text style={styles.userName}>Jinny Oslin</Text>
                                        <Text style={styles.reviewTime}>A day ago</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.reviewText}>Fresh ingredients, good taste</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.comboSection}>
                    <Text style={styles.sectionTitle}>Combo</Text>
                    <View style={styles.comboItem}>
                        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f1fcfb492a32d62e5ad6257a9197cfaf955ea883a87eb0f411a9f7a9e1e7247?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.comboImage} resizeMode="contain" />
                        <View style={styles.comboInfo}>
                            <Text style={styles.comboName}>Combo B</Text>
                            <Text style={styles.comboDescription}>Fried Chicken, Chicken Rice & Salad</Text>
                            <View style={styles.comboDetails}>
                                <Text style={styles.comboPrice}>$25</Text>
                                <View style={styles.ratingContainer}>
                                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/92ff9b4fefe14ce6ac0e8b9be65c8d0782070a3cd9365ca51358d553d23db4b3?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.starIcon} resizeMode="contain" />
                                    <Text style={styles.ratingText}>4.5 (90)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.comboItem}>
                        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a6c8cab625eeecce4aaab53bb9e1f06fd47884abc114bab5ce559e1cbef47d1?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.comboImage} resizeMode="contain" />
                        <View style={styles.comboInfo}>
                            <Text style={styles.comboName}>Combo B</Text>
                            <Text style={styles.comboDescription}>Fried Chicken (Small) & Potatos</Text>
                            <View style={styles.comboDetails}>
                                <Text style={styles.comboPrice}>$19</Text>
                                <View style={styles.ratingContainer}>
                                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/92ff9b4fefe14ce6ac0e8b9be65c8d0782070a3cd9365ca51358d553d23db4b3?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.starIcon} resizeMode="contain" />
                                    <Text style={styles.ratingText}>4.6 (75)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.tabBar}>
                {tabIcons.map((icon, index) => (
                    <TouchableOpacity key={index} style={styles.tabItem}>
                        <Image source={{ uri: icon }} style={styles.tabIcon} resizeMode="contain" />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        paddingHorizontal: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerImage: {
        width: '100%',
        aspectRatio: 1.88,
    },
    headerInfo: {
        marginTop: -40,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    tagContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    tag: {
        borderRadius: 2,
        paddingHorizontal: 6,
        paddingVertical: 1,
        marginRight: 9,
    },
    tagText: {
        color: 'white',
        fontSize: 11,
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: '600',
        color: 'rgba(23, 26, 31, 1)',
        marginBottom: 12,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    detailText: {
        fontSize: 14,
        color: 'rgba(23, 26, 31, 1)',
    },
    infoSection: {
        marginBottom: 20,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    infoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoIcon: {
        width: 20,
        height: 20,
        marginRight: 6,
    },
    infoText: {
        fontSize: 14,
        color: 'rgba(23, 26, 31, 1)',
    },
    chevronIcon: {
        width: 20,
        height: 20,
    },
    menuSection: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(50, 56, 66, 1)',
    },
    viewAll: {
        fontSize: 14,
        color: 'rgba(144, 149, 160, 1)',
    },
    menuItem: {
        width: 158,
        marginRight: 20,
    },
    menuItemImage: {
        width: '100%',
        aspectRatio: 1.25,
        borderRadius: 4,
    },
    menuItemName: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(50, 56, 66, 1)',
        marginTop: 8,
    },
    menuItemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        width: 12,
        height: 12,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
        color: 'rgba(23, 26, 31, 1)',
    },
    priceText: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(23, 26, 31, 1)',
    },
    menuItemLarge: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    menuItemLargeImage: {
        width: 89,
        aspectRatio: 0.95,
        borderRadius: 6,
    },
    menuItemLargeInfo: {
        flex: 1,
        marginLeft: 12,
    },
    menuItemLargeName: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(23, 26, 31, 1)',
    },
    menuItemLargeDescription: {
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
        marginTop: 4,
    },
    menuItemLargeDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    seeAllButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgba(255, 119, 0, 1)',
        paddingVertical: 7,
        paddingHorizontal: 70,
        alignItems: 'center',
        marginTop: 16,
    },
    seeAllText: {
        color: 'rgba(255, 119, 0, 1)',
        fontSize: 14,
        fontWeight: '400',
    },
    reviewSection: {
        marginBottom: 20,
    },
    reviewItem: {
        marginBottom: 16,
    },
    reviewItemCompact: {
        marginTop: 14,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    userName: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgba(23, 26, 31, 1)',
    },
    reviewTime: {
        fontSize: 11,
        color: 'rgba(144, 149, 160, 1)',
    },
    ratingStars: {
        width: 85,
        height: 16,
    },
    reviewText: {
        fontSize: 12,
        color: 'rgba(23, 26, 31, 1)',
        marginTop: 8,
    },
    viewAllContainer: {
        marginTop: 16,
    },
    comboSection: {
        marginBottom: 20,
    },
    comboItem: {
        flexDirection: 'row',
        marginBottom: 32,
    },
    comboImage: {
        width: 89,
        aspectRatio: 0.95,
        borderRadius: 6,
    },
    comboInfo: {
        flex: 1,
        marginLeft: 12,
    },
    comboName: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(23, 26, 31, 1)',
    },
    comboDescription: {
        fontSize: 12,
        color: 'rgba(144, 149, 160, 1)',
        marginTop: 4,
    },
    comboDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    comboPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(23, 26, 31, 1)',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    tabItem: {
        alignItems: 'center',
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
});

export default RestaurantDetailsScreen;