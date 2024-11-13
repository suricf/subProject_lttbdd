import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const OrderTrackingScreen = () => {
    const steps = [
        { label: 'Confirm\norder', completed: true },
        { label: 'Look for\ndriver', completed: true },
        { label: 'Prepare\nfood', completed: false },
        { label: 'Deliver', completed: false },
        { label: 'Arrived', completed: false },
    ];

    return (
        <View style={styles.container}>

            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/21596886dfa89d3e4d5010835985038e4794283794dbcdbc2ca78ec400566e5b?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.checkIcon} resizeMode="contain" />
            <Text style={styles.orderConfirmedText}>Order confirmed</Text>
            <Text style={styles.lookingForDriverText}>Looking for driver</Text>
            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/89c42cb718f6ccea0c3b9b2a2ae746c7c0ae5e7b5b74e84b5992a86dd3799d65?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.driverImage} resizeMode="contain" />

            <View style={styles.progressContainer}>
                <View style={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <Image
                                    source={{ uri: step.completed ? "https://cdn.builder.io/api/v1/image/assets/TEMP/66c4e207759b0631e34378b607ae913efb12b823f586ba8b831e5e445b5142e4?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" : "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd39bc6a6537efcdfbeb42e08bf5146cef1503cf44bde4e0e13c387acdeb7ea?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }}
                                    style={styles.connector}
                                    resizeMode="contain"
                                />
                            )}
                            <View style={[styles.step, step.completed && styles.stepCompleted]} />
                        </React.Fragment>
                    ))}
                </View>
                <View style={styles.labelsContainer}>
                    {steps.map((step, index) => (
                        <Text key={index} style={[styles.stepLabel, step.completed && styles.stepLabelCompleted]}>
                            {step.label}
                        </Text>
                    ))}
                </View>
            </View>

            <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.helpButtonText}>Need help?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton}>
                <View style={styles.cancelButtonContent}>
                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/44a2bab4a7363b7ba9dce1d1967648444fdcf8f942a5a48aef61f340e19e36ff?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63" }} style={styles.cancelIcon} resizeMode="contain" />
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 271,
        maxWidth: 480,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 9.35,
    },
    checkIcon: {
        width: 32,
        aspectRatio: 1,
        marginTop: 64,
    },
    orderConfirmedText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 28,
        textAlign: 'center',
        marginTop: 4,
        color: 'rgba(23, 26, 31, 1)',
    },
    lookingForDriverText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 8,
        color: 'rgba(23, 26, 31, 1)',
    },
    driverImage: {
        width: 131,
        aspectRatio: 1,
        marginTop: 12,
    },
    progressContainer: {
        width: '100%',
        maxWidth: 335,
        marginTop: 12,
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 13,
    },
    step: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(255, 119, 0, 1)',
    },
    stepCompleted: {
        backgroundColor: 'rgba(255, 119, 0, 1)',
    },
    connector: {
        width: 55,
        height: 2,
    },
    labelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    stepLabel: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 11,
        color: 'rgba(144, 149, 160, 1)',
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 18,
    },
    stepLabelCompleted: {
        color: 'rgba(23, 26, 31, 1)',
    },
    helpButton: {
        borderRadius: 3,
        borderColor: 'rgba(255, 119, 0, 1)',
        borderWidth: 1,
        marginTop: 36,
        width: '100%',
        maxWidth: 335,
        paddingVertical: 7,
        alignItems: 'center',
    },
    helpButtonText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(255, 119, 0, 1)',
        fontWeight: '400',
        lineHeight: 28,
    },
    cancelButton: {
        borderRadius: 4,
        marginTop: 12,
        width: '100%',
        maxWidth: 335,
        paddingVertical: 7,
        alignItems: 'center',
    },
    cancelButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cancelIcon: {
        width: 16,
        aspectRatio: 1,
        marginRight: 6,
    },
    cancelButtonText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgba(144, 149, 160, 1)',
        fontWeight: '400',
        lineHeight: 28,
    },
});

export default OrderTrackingScreen;