import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CheckoutSelectLocation = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [address, setAddress] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    useEffect(() => {
        if (selectedOption === 'Home' || selectedOption === 'Work') {
            const userAddress = user.address ? user.address.find(addr => addr.type === selectedOption) : null;
            if (userAddress) {
                setAddress(userAddress.text);
            }
        }
    }, [selectedOption, user.address]);
    const locationOptions = [
        { label: 'Home', id: 'Home' },
        { label: 'Work', id: 'Work' },
        { label: 'Other', id: 'Other' },
    ];
    const handleSaveAddress = async () => {
        if (selectedOption === 'Other') {
            const temporaryAddress = await AsyncStorage.getItem('temporaryAddress');
            if (temporaryAddress) {
                await AsyncStorage.removeItem('temporaryAddress'); // Xóa temporaryAddress cũ nếu tồn tại
            }
            await AsyncStorage.setItem('temporaryAddress', address);
            navigation.goBack();
            return;
        }
        try {
            const updatedAddress = user.address ? [...user.address] : [];
            const addressIndex = updatedAddress.findIndex(addr => addr.type === selectedOption);
            if (addressIndex !== -1) {
                updatedAddress[addressIndex].text = address;
            } else {
                updatedAddress.push({ type: selectedOption, text: address });
            }
            const updatedUser = { ...user, address: updatedAddress };
            await axios.put(`http://localhost:3000/users/${user._id}`, updatedUser);
            setUser(updatedUser);
            const temporaryAddress = await AsyncStorage.getItem('temporaryAddress');
            if (temporaryAddress) {
                await AsyncStorage.removeItem('temporaryAddress'); // Xóa temporaryAddress cũ nếu tồn tại
            }
            await AsyncStorage.setItem('temporaryAddress', address);
            navigation.goBack();
        } catch (error) {
            console.error('Error updating address:', error);
        }
    };
    const RadioButton = ({ label, selected, onSelect }) => (
        <TouchableOpacity onPress={onSelect} style={styles.radioContainer}>
            <View style={[styles.radio, selected && styles.radioSelected]} />
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    const LocationInput = ({ address, onEdit, isEditing, setAddress }) => (
        <View style={styles.locationInputContainer}>
            <View style={styles.addressContainer}>
                {isEditing ? (
                    <TextInput
                        style={styles.addressText}
                        value={address} // Liên kết state `address`
                        onChangeText={(text) => setAddress(text)} // Cập nhật state khi nhập
                        autoFocus
                        onBlur={() => setIsEditing(false)}// Tắt chế độ chỉnh sửa khi mất focus
                    />
                ) : (
                    <Text style={styles.addressText}> {address || 'Tap to enter address'} </Text>
                )}
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
                    address={address}
                    onEdit={() => setIsEditing(true)}
                    isEditing={isEditing}
                    setAddress={setAddress}
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
                <ConfirmButton onPress={handleSaveAddress} />
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
        height: 30
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
