import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import GoogleLogin from './GoogleLogin';

export default function HomeScreen() {
    return (
        <>
            <View style={styles.container}>
                <GoogleLogin/>
                <Image
                resizeMode='contain'                
                style={styles.homeImg}
                source={require('../assets/images/Strava-Home.webp')}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',     
    },

    homeImg: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
});


