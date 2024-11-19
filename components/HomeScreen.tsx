import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <>
            <View style={styles.container}>
                <Text>Hola, Que haces?</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',        
        paddingHorizontal: 120,
        backgroundColor: 'red'
    },
});


