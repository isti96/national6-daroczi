import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Picker,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Login extends Component {
  state = { user: "English" };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>
          <TouchableOpacity>
            <Icon name="cog" style={styles.cog} size={30} />
          </TouchableOpacity>
        </Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/Octocat.png")}
          />
          <Text style={styles.title}>Pistagram</Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.pickerContainer}>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}
              style={styles.picker}
            >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="Română" value="Română" />
            </Picker>
          </TouchableOpacity>
          <TextInput
            placeholder={
              this.state.user === "English"
                ? "username or e-mail"
                : "utilizator sau e-mail"
            }
            placeholderTextColor="rgba(255,255,255,0.7)"
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            placeholder={this.state.user === "English" ? "password" : "parolă"}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            ref={(input) => (this.passwordInput = input)}
          />
          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={() => console.log("login")}
          >
            <Text style={styles.buttonText}>
              {this.state.user === "English" ? "LOGIN" : "AUTENTIFICĂ-TE"}
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.orText}>
              {this.state.user === "English" ? "or" : "sau"}
            </Text>
          </View>
          <View style={styles.socMedIcons}>
            <TouchableOpacity>
              <Icon name="facebook" style={styles.icon} size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="instagram" style={styles.icon} size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="linkedin" style={styles.icon} size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="google" style={styles.icon} size={30} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signupButtonContainer}>
            <Text style={styles.buttonText}>
              {this.state.user === "English" ? "SIGN UP" : "CREAȚI CONT NOU"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassText}>
              {this.state.user === "English"
                ? "Forgot your password? Tap here!"
                : "Ți-ai uitat parola? Apasă aici!"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
  },
  socMedIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  formContainer: {
    justifyContent: "flex-end",
  },
  orText: {
    textAlign: "center",
  },
  icon: {
    padding: 10,
  },
  signupButtonContainer: {
    backgroundColor: "darkblue",
    paddingVertical: 15,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  forgotPassText: {
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
  },
  picker: {
    color: "black",
    marginLeft: 20,
    marginRight: 20,
  },
  pickerContainer: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
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
    color: "#FFF",
    marginTop: 10,
    width: 160,
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
