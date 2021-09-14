import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

export default class Login extends Component {
  state = { user: "English" };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/Octocat.png")}
          />
          <Text style={styles.title}>MyStackLibrary</Text>

          <Text style={styles.title}>Dear User, welcome on MyStackLibrary</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "lightblue"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: "blue",
    marginTop: 10,
    width: 210,
    textAlign: "center",
    opacity: 0.9,
    fontSize: 30,
  },
  cog: {
    color: "lightblue",
    alignSelf: "flex-end",
    padding: 5,
  },
});
