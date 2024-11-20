import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'

//Android: 1007469495573-h9hd4metlfl0l2i3595sqsk7m4as4bc2.apps.googleusercontent.com

export default function GoogleLogin() {

  const [ userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "1007469495573-h9hd4metlfl0l2i3595sqsk7m4as4bc2.apps.googleusercontent.com"
  })

  useEffect(() => {
    handleSignInWithGoogle()
  }, [response])

  async function handleSignInWithGoogle () {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if(response?.type === "success") {
        await getUserInfo(response.authentication?.accessToken)

      }
    } else {
      setUserInfo(JSON.parse(user))
    }
  }

  const getUserInfo = async (token: any) => {
    if(!token) return;
    try {
      const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo",
        {headers: {Authorization: `Bearer ${token}` }, }
      )
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
     <View style={styles.container}>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Text style={styles.title}>Google Login</Text>
      <Button title="Sign in With Google" onPress={() => promptAsync()}/>
     </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',     
  },

  title: {

  }
  
});


