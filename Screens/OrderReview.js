import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

const OrderReview = () => {
    const [orderItems, setOrderItems] = useState([
        {
            id: 1,
            name: 'Fried Chicken',
            size: 'L',
            toppings: 'Corn, Cheese Cheddar',
            spiciness: 'Hot',
            price: 32,
            quantity: 1,
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/913dd89588520eda796096051cfd0942e92b68e85d73b7b5b1db7d7659e6b204?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        },
        {
            id: 2,
            name: 'Chicken Salad',
            size: 'M',
            sauce: 'Roasted Sesame',
            spiciness: 'No',
            price: 10,
            quantity: 1,
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ae507bc2affd1e1d3996f4cd2f708a956cbd0f0c54fbebe7a69062535e11705?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63',
        },
    ]);

    const [subtotal, setSubtotal] = useState(42);
    const [deliveryFee, setDeliveryFee] = useState(2);
    const [promotion, setPromotion] = useState(3.2);

    const updateQuantity = (id, increment) => {
        setOrderItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + increment) }
                    : item
            )
        );
        updateTotals();
    };

    const updateTotals = () => {
        const newSubtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
        setPromotion(newSubtotal > 50 ? newSubtotal * 0.3 : 0);
    };

    const Header = () => (
        <View style={styles.headerContainer}>

            <View style={styles.headerContent}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Navigates to the previous screen"
                >
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4875b4785618142b17b6adeb9f47874bebe36631e4c50604c507cb4e09663690?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.backButton}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Order review</Text>
            </View>
        </View>
    );

    const DeliveryInfo = () => (
        <View style={styles.deliveryContainer}>
            <View style={styles.deliveryInfo}>
                <Text style={styles.sectionTitle}>Delivered to</Text>
                <View style={styles.addressRow}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b77f0e0f57b55c4049647c8ea8d1bdcb3f59297a46cda24f109351ff918c46c7?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.icon}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="Location pin icon"
                    />
                    <Text style={styles.addressText}>201 Katlian No.21 Street</Text>
                </View>
                <View style={styles.timeRow}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8193449b21ec0d31090e5f9b528c2913f23e369c522391a01d68c5a9e297d1df?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.icon}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="Clock icon"
                    />
                    <Text style={styles.timeText}>20 mins</Text>
                </View>
                <Text style={styles.sectionTitle}>Order details</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Change address"
                    accessibilityHint="Opens the address change screen"
                >
                    <Text style={styles.actionText}>Change address</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Add more items"
                    accessibilityHint="Opens the menu to add more items"
                >
                    <Text style={styles.actionText}>Add more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const OrderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.itemInfo}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                    resizeMode="contain"
                    accessible={true}
                    accessibilityLabel={`Image of ${item.name}`}
                />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemSize}>Size: {item.size}</Text>
                    {item.toppings && (
                        <Text style={styles.itemExtra}>Topping: {item.toppings}</Text>
                    )}
                    {item.sauce && (
                        <Text style={styles.itemExtra}>Sauce: {item.sauce}</Text>
                    )}
                    <Text style={styles.itemExtra}>Spiciness: {item.spiciness}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
            </View>
            <TouchableOpacity
                accessible={true}
                accessibilityLabel={`Remove ${item.name} from order`}
                accessibilityHint="Removes this item from your order"
            >
                <Image
                    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/31285b250ae0582cfbd9d267ebfa9c42ec181358af247a64afcafac491197c09?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                    style={styles.deleteButton}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <View style={styles.quantityControl}>
                <TouchableOpacity
                    onPress={() => updateQuantity(item.id, -1)}
                    accessible={true}
                    accessibilityLabel={`Decrease quantity of ${item.name}`}
                    accessibilityHint="Decreases the quantity of this item by one"
                >
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc0ce8055cf8dddd49fdf7a3a1d51d9f2f9369a3c3ee9c385cd297983c65721f?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.quantityButton}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                    onPress={() => updateQuantity(item.id, 1)}
                    accessible={true}
                    accessibilityLabel={`Increase quantity of ${item.name}`}
                    accessibilityHint="Increases the quantity of this item by one"
                >
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/155d55b580675ba9e46b8bf0f617055f352ee83e4e9938ce0a75451dcd9782f9?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.quantityButton}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    const AlsoOrdered = () => (
        <View style={styles.alsoOrderedContainer}>
            <Text style={styles.alsoOrderedTitle}>Also ordered</Text>
            <View style={styles.alsoOrderedItemsContainer}>
                <View style={styles.alsoOrderedItem}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5c9aba52de13a338f09582bd1bd72a811126113143b07b94dfa30b103adc28f4?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.alsoOrderedItemImage}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="Image of Sauté Chicken Rice"
                    />
                    <View style={styles.alsoOrderedItemInfo}>
                        <Text style={styles.alsoOrderedItemName}>Sauté Chicken Rice</Text>
                        <Text style={styles.alsoOrderedItemPrice}>$15</Text>
                    </View>
                </View>
                <View style={styles.alsoOrderedItem}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7187a987a75b8b6953fd65467d3ebd97323650c986e1a0d0d68b03c9d76262ae?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.alsoOrderedItemImage}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="Image of another popular dish"
                    />
                </View>
            </View>
        </View>
    );

    const PaymentDetails = () => (
        <View style={styles.paymentDetailsContainer}>
            <Text style={styles.paymentDetailsTitle}>Payment details</Text>
            <TouchableOpacity
                style={styles.paymentMethod}
                accessible={true}
                accessibilityLabel="Select payment method"
                accessibilityHint="Opens the payment method selection screen"
            >
                <View style={styles.methodInfo}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71604c93e821a6ee256f1638eb850dda1364cfab447270e67036e98358e188c1?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.icon}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="E-wallet icon"
                    />
                    <Text style={styles.methodText}>E-wallet</Text>
                </View>
                <Image
                    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96c35c001669b159b6b439ecc0497714eeee653930c0f3ac50eba241ab02de95?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                    style={styles.chevron}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.promotion}
                accessible={true}
                accessibilityLabel="View promotion details"
                accessibilityHint="Opens the promotion details screen"
            >
                <View style={styles.promotionInfo}>
                    <Image
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/face7598ed339bab80e8bc57153d6b791512e1c272a54214a12589ca09ed7044?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                        style={styles.icon}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="Promotion icon"
                    />
                    <Text style={styles.promotionText}>- 30% for bill over $50</Text>
                </View>
                <Image
                    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96c35c001669b159b6b439ecc0497714eeee653930c0f3ac50eba241ab02de95?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
                    style={styles.chevron}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <View style={styles.subtotal}>
                <View>
                    <Text style={styles.subtotalText}>Subtotal</Text>
                    <Text style={styles.subtotalText}>Delivery fee</Text>
                </View>
                <View>
                    <Text style={styles.subtotalAmount}>${subtotal.toFixed(2)}</Text>
                    <Text style={styles.subtotalAmount}>${deliveryFee.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.promotionTotal}>
                <Text style={styles.promotionText}>Promotion</Text>
                <Text style={styles.promotionAmount}>-${promotion.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.paymentTotal}>
                <Text style={styles.paymentText}>Payment method</Text>
                <Text style={styles.paymentText}>E-wallet</Text>
            </View>
        </View>
    );

    const OrderTotal = () => (
        <View style={styles.orderTotalContainer}>
            <View style={styles.totalRow}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalAmount}>${(subtotal + deliveryFee - promotion).toFixed(2)}</Text>
            </View>
            <TouchableOpacity
                style={styles.orderButton}
                onPress={() => { }}
                accessible={true}
                accessibilityLabel="Order now"
                accessibilityHint="Places your order"
            >
                <Text style={styles.orderButtonText}>Order now</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Header />
            <DeliveryInfo />
            {orderItems.map(item => (
                <OrderItem key={item.id} item={item} />
            ))}
            <AlsoOrdered />
            <PaymentDetails />
            <OrderTotal />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: 100,
    },
    headerContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    backButton: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: 16,
    },
    deliveryContainer: {
        padding: 16,
    },
    deliveryInfo: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#323842',
        marginBottom: 8,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    addressText: {
        fontSize: 14,
        color: '#171A1F',
    },
    timeText: {
        fontSize: 14,
        color: '#171A1F',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionText: {
        fontSize: 12,
        color: '#FF7700',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    itemInfo: {
        flex: 1,
        flexDirection: 'row',
    },
    itemImage: {
        width: 60,
        height: 60,
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#323842',
    },
    itemSize: {
        fontSize: 12,
        color: '#909590',
    },
    itemExtra: {
        fontSize: 12,
        color: '#909590',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#171A1F',
        marginTop: 8,
    },
    deleteButton: {
        width: 24,
        height: 24,
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantityButton: {
        width: 24,
        height: 24,
    },
    quantity: {
        fontSize: 16,
        fontWeight: '600',
        color: '#171A1F',
        marginHorizontal: 16,
    },
    alsoOrderedContainer: {
        padding: 16,
    },
    alsoOrderedTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#323842',
        marginBottom: 16,
    },
    alsoOrderedItemsContainer: {
        flexDirection: 'row',
    },
    alsoOrderedItem: {
        marginRight: 16,
    },
    alsoOrderedItemImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    alsoOrderedItemInfo: {
        marginTop: 8,
    },
    alsoOrderedItemName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#323842',
    },
    alsoOrderedItemPrice: {
        fontSize: 14,
        color: '#171A1F',
        marginTop: 4,
    },
    paymentDetailsContainer: {
        padding: 16,
    },
    paymentDetailsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#323842',
        marginBottom: 16,
    },
    paymentMethod: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        marginBottom: 16,
    },
    methodInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    methodText: {
        fontSize: 14,
        color: '#171A1F',
        marginLeft: 8,
    },
    chevron: {
        width: 24,
        height: 24,
    },
    promotion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        marginBottom: 16,
    },
    promotionInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promotionText: {
        fontSize: 14,
        color: '#171A1F',
        marginLeft: 8,
    },
    subtotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    subtotalText: {
        fontSize: 14,
        color: '#323842',
    },
    subtotalAmount: {
        fontSize: 14,
        color: '#171A1F',
        textAlign: 'right',
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginBottom: 16,
    },
    promotionTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    promotionAmount: {
        fontSize: 14,
        color: '#FF7700',
        textAlign: 'right',
    },
    paymentTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paymentText: {
        fontSize: 14,
        color: '#323842',
    },
    orderTotalContainer: {
        padding: 16,
        backgroundColor: '#F8F9FA',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    totalText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#171A1F',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: '700',
        color: '#171A1F',
    },
    orderButton: {
        backgroundColor: '#FF7700',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    orderButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});

export default OrderReview;