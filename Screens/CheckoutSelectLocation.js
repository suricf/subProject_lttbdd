import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

const CheckoutSelectLocation = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const locationOptions = [
        { label: 'Home', id: 'home' },
        { label: 'Work', id: 'work' },
        { label: 'Other', id: 'other' },
    ];

    const RadioButton = ({ label, selected, onSelect }) => (
        <TouchableOpacity onPress={onSelect} style={styles.radioContainer}>
            <View style={[styles.radio, selected && styles.radioSelected]} />
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    const LocationInput = ({ address, onEdit }) => (
        <View style={styles.locationInputContainer}>
            <View style={styles.addressContainer}>
                <Text style={styles.addressText}>{address}</Text>
                <TouchableOpacity onPress={onEdit}>
                    <Image
                        resizeMode="contain"
                        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cba65d55fd072d3c6ac4ec63b2b00873215654a3061dd20679c210450ecf56c3?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                        style={styles.editIcon}
                    />
                </TouchableOpacity>
            </View>
            <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a3e0dc664bfd5c6ad580ea78b74d11374d4b48bee69340e5ce5731053a1cffc?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                style={styles.divider}
            />
        </View>
    );

    const ConfirmButton = ({ onPress }) => (
        <TouchableOpacity style={styles.confirmButton} onPress={onPress}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e2b03baa6717e46864ca2fd5821c446fd6937043a1a13f685d8004f2415bd6e?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                style={styles.backgroundImage}
            >

                <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f79d0d639b755d58ea29d89f5009bf8d86397123d5fc70300fa0917662cd220?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                    style={styles.bottomImage}
                />
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Select location</Text>
                <LocationInput
                    address="201 Katlian No.21 Street"
                    onEdit={() => { }}
                />
                <View style={styles.radioGroup}>
                    {locationOptions.map((option) => (
                        <RadioButton
                            key={option.id}
                            label={option.label}
                            selected={selectedOption === option.id}
                            onSelect={() => setSelectedOption(option.id)}
                        />
                    ))}
                </View>
                <ConfirmButton onPress={() => { }} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 480,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    backgroundImage: {
        aspectRatio: 0.63,
        width: '100%',
    },
    topImage: {
        width: '100%',
        aspectRatio: 9.35,
    },
    bottomImage: {
        width: '100%',
        aspectRatio: 2.64,
        marginTop: 171,
        marginBottom: -49,
    },
    contentContainer: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 28,
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(23, 26, 31, 1)',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        lineHeight: 32,
    },
    locationInputContainer: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginTop: 16,
        paddingTop: 7,
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressText: {
        flex: 1,
    },
    editIcon: {
        width: 16,
        aspectRatio: 1,
    },
    divider: {
        width: '100%',
        aspectRatio: 333.33,
        marginTop: 7,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 27,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radio: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(86, 94, 108, 1)',
        marginRight: 6,
    },
    radioSelected: {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
    },
    radioLabel: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(23, 26, 31, 1)',
    },
    confirmButton: {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 3,
        marginTop: 28,
        paddingVertical: 7,
        paddingHorizontal: 70,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        fontWeight: '400',
    },
});

export default CheckoutSelectLocation;
