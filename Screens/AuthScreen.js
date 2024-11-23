import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';
import { AuthContext } from './AuthContext';
export default function AuthScreen({ navigation }) {
    const { setUser } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleAuth = async () => {
        if (!email || !password || (!isLogin && !username)) {
            alert('Please fill in all fields');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            alert('Error', 'Passwords do not match');
            return;
        }

        const payload = {
            email,
            password,
            ...(isLogin ? {} : { username })
        };

        try {
            const response = await axios.post(`http://localhost:3000/${isLogin ? 'login' : 'register'}`, payload);
            alert('Success', response.data.message);
            console.log(response.data);
            if (isLogin) {
                setUser(response.data.user);
                console.log(response.data.user._id)
                navigation.navigate('Screen_01');
            } else {
                setIsLogin(true);
                setPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            alert('Error', 'Something went wrong');
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                {!isLogin && (
                    <TextInput
                        style={styles.input}
                        placeholder="Tên người dùng"
                        value={username}
                        onChangeText={setUsername}
                    />
                )}
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
                <TouchableOpacity style={styles.button} onPress={handleAuth}>
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
