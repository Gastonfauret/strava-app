import HomeScreen from "../components/HomeScreen";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {    
    width: '100%',
    height: '100%',
    justifyContent: 'center'  
  },
});
