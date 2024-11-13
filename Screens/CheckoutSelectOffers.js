import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const offerData = [
    {
        id: 1,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b96eca5134a7f78ec21dad938933bb62b6bbbce10a3b0f3ee8737a64f49d59e6?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        text: '- 10%',
        isSelected: true,
    },
    {
        id: 2,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e128452581ec75a492f3c1a32b2c385ded148007a5bd8742bd7739f7e41686eb?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        text: '-$1 shipping fee',
        isSelected: false,
    },
    {
        id: 3,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96aebcb889d9baae8f42a99a8e7e2be325f71838389c924e4f85ffb22225e7f9?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        text: '-10% for E-wallet',
        isSelected: false,
    },
    {
        id: 4,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c07227b5b2d3c1c096f3d93438abe358f416100c771de2d63220b62b6bf2452?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        text: '- 30% for bill over $50',
        isDisabled: true,
    },
    {
        id: 5,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2847a024b2b1815aeb3dc5151a472f778ad08b03f4c03bbb9759cccdf9779c3e?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        text: 'Freeship',
        isDisabled: true,
    },
];



function OfferItem({ image, text, isSelected, isDisabled, onSelect }) {
    return (
        <TouchableOpacity
            style={[
                styles.offerContainer,
                isSelected && styles.selectedOfferContainer,
                isDisabled && styles.disabledOfferContainer,
            ]}
            onPress={onSelect}
            disabled={isDisabled}
            accessibilityRole="radio"
            accessibilityState={{ checked: isSelected, disabled: isDisabled }}
            accessibilityLabel={`${text} offer ${isDisabled ? 'disabled' : ''}`}
        >
            <View style={styles.offerContent}>
                <Image resizeMode="contain" source={{ uri: image }} style={styles.offerImage} accessibilityLabel={`${text} offer icon`} />
                <Text style={[styles.offerText, isDisabled && styles.disabledOfferText]}>{text}</Text>
            </View>
            {!isDisabled && (
                <View style={styles.radioContainer}>
                    <View style={styles.radioOuter}>
                        {isSelected && <View style={styles.radioInner} />}
                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
}

function CheckoutSelectOffers() {
    const [offers, setOffers] = useState(offerData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOfferSelect = (id) => {
        setOffers(offers.map(offer =>
            offer.id === id ? { ...offer, isSelected: true } : { ...offer, isSelected: false }
        ));
    };

    const filteredOffers = offers.filter(offer =>
        offer.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>

                <View style={styles.headerContent}>
                    <TouchableOpacity accessibilityRole="button" accessibilityLabel="Go back">
                        <Image
                            resizeMode="contain"
                            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b12fecf66736d8b0da1cd0923809c8065d2cf95512129d8f14139c0c71175eda?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                            style={styles.backButton}
                        />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Select offer</Text>
                    </View>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Add or search for voucher"
                    placeholderTextColor="rgba(188, 193, 202, 1)"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    accessibilityLabel="Search for voucher"
                />
            </View>
            {filteredOffers.map((offer) => (
                <OfferItem
                    key={offer.id}
                    {...offer}
                    onSelect={() => handleOfferSelect(offer.id)}
                />
            ))}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    accessibilityRole="button"
                    accessibilityLabel="Use now"
                >
                    <Text style={styles.buttonText}>Use now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        alignSelf: 'stretch',
        width: '100%',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 9.35,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    backButton: {
        width: 44,
        height: 44,
        borderRadius: 4,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: 'rgba(23, 26, 31, 1)',
        lineHeight: 36,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginBottom: 37,
    },
    searchInput: {
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 7,
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: 'rgba(50, 56, 66, 1)',
    },
    offerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(222, 225, 230, 1)',
        marginHorizontal: 20,
        marginBottom: 16,
        padding: 10,
    },
    selectedOfferContainer: {
        borderColor: 'rgba(255, 119, 0, 1)',
    },
    disabledOfferContainer: {
        opacity: 0.5,
    },
    offerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    offerImage: {
        width: 56,
        height: 56,
        marginRight: 12,
    },
    offerText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'rgba(50, 56, 66, 1)',
    },
    disabledOfferText: {
        color: 'rgba(110, 119, 135, 1)',
    },
    radioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioOuter: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(86, 94, 108, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioInner: {
        width: 9,
        height: 9,
        borderRadius: 4.5,
        backgroundColor: 'rgba(228, 107, 0, 1)',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'rgba(255, 119, 0, 1)',
        borderRadius: 3,
        paddingVertical: 9,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 1)',
    },
});

export default CheckoutSelectOffers;