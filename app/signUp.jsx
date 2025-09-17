import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Home03Icon } from "hugeicons-react-native";
import BackButton from "../assets/images/Button/BackButton";
import { Alert } from "react-native";
import { router } from "expo-router";

export default function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [name, setName] = useState("");

 const handleLogin = () => {
  if (!email.trim() || !password.trim()) {
    Alert.alert("Error", "Please enter both email and password");
    return;
  }

  // If valid
  console.log("Email:", email, "Password:", password);
  // 👉 Navigate or call API here
};

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.welcome}>Lets</Text>
        <Text style={styles.subtitle}>Get Started</Text>
      </View>

      <Text style={styles.title}>Sign up</Text>


  <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

   

      {/* Login Button */}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      <View style={styles.signupContainer}>
  <Text style={styles.signupText}>Already have an account? </Text>
  <Pressable onPress={() => router.push("login")}>
    <Text style={styles.signupLink}>Login</Text>
  </Pressable>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  header: {
    position: "absolute",
    top: 80, // distance from top
    left: 20,
    marginTop: 10,
  },
  welcome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222", // dark text
  },
  subtitle: {
    fontSize: 16,
    color: "#666", // lighter gray
    marginTop: 4,
  },
  forgotText: {
    color: "#007BFF", // blue link-like color
    marginTop: 8,
    marginBottom: 16,
    textAlign: "right",
    fontWeight: "500",
  },
  signupContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 16,
},
signupText: {
  color: '#555',
  fontSize: 14,
},
signupLink: {
  color: '#007BFF',  // blue like a link
  fontWeight: '600',
  fontSize: 14,
},

});
