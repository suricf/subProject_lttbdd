import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function AuthScreen({ navigation }) {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {!isLogin && (
                    <TextInput
                        style={styles.input}
                        placeholder="Xác nhận mật khẩu"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                )}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</Text>
                </TouchableOpacity>

                {/* Link */}
                <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.linkText}>
                        {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFA500', // Orange color for the title
    },
    form: {
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: '#F9F9F9',
    },
    button: {
        backgroundColor: '#FFA500',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#FFA500',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
    forgotPassword: {
        color: '#FFA500',
        fontSize: 14,
        textAlign: 'center',
    },
});
