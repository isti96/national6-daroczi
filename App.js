import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Picker,
} from "react-native";
import Login from "./src/Login.js";

// import { Picker } from "@react-native-picker/picker";

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Login />
        <View style={styles.formContainer}></View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
  },
});

//

// export default function App() {
//   const handlePress = () => console.log("text pressed");

//   return (
//     <View
//       style={{
//         backgroundColor: "lightblue",
//         flex: 1,
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-evenly",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           height: 100,
//           width: "25%",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text onPress={handlePress}>Hello lanyok</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "gold",
//           height: 100,
//           width: "75%",
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           height: 100,
//           width: "50%",
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
