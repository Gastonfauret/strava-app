import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { account } from '@/appwrite';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation(); // Sin tipado explícito

    async function handleLogin() {
        try {
            await account.createOAuth2Session(
                'google',
                'http://localhost:8081/',
                'http://localhost:8081/fail',
            );

            // Si el login es exitoso, redirige a HomeScreenStrava
            navigation.navigate('HomeScreenStrava' as never); // Sin validación de tipos
        } catch (error) {
            console.error('Error during Google login:', error);
            // Manejar error (mostrar alerta, etc.)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.homeImg}
                    source={require('../assets/images/Strava-Home.webp')}
                />

                <Pressable style={styles.btnGoogle} onPress={handleLogin}>
                    <View style={styles.containerGoogle}>
                        <Image
                            source={require('../assets/images/google-color-svgrepo-com.svg')}
                            style={styles.logoGoogle}
                        />
                        <Text style={styles.textGoogle}>Ingresa con Google</Text>
                    </View>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    homeImg: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    btnGoogle: {
        backgroundColor: '#ff5733',
        width: '28%',
        height: '6%',
        position: 'absolute',
        bottom: '1.5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    containerGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoGoogle: {
        width: 17,
        height: 17,
        marginRight: 8,
    },
    textGoogle: {
        fontWeight: '700'
    }
}
)
