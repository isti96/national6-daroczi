import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import Login from "./src/Login.js";
import KeyboardAvoidingWrapper from "./src/KeyboardAvoidingWrapper.js";

export default class RootStackStart extends Component {
  render() {
    return (
      <KeyboardAvoidingWrapper>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Login />
        </KeyboardAvoidingView>
      </KeyboardAvoidingWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
  },
});
