import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { loginUser } from "../api";
import Layout from "../components/Layout";


const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) =>
  {setCredentials({ ...credentials, [name]: value })};

  const handleSubmit = () => 
  {loginUser(credentials)}

  return (
    <Layout>
      <TextInput
        placeholder="email"
        placeholderTextColor="#546574"
        style={styles.input}
        onChangeText={(email)=>handleChange('email', email)}
        autoCapitalize='none'
      />
      <TextInput  
        placeholder="Password"
        placeholderTextColor="#546574"
        style={styles.input}
        onChangeText={(password)=>handleChange('password', password)}
        autoCapitalize='none'
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.tapText}>Sign Up</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    fontSize: 14,
    color: "#ffffff",
    padding: 4,
    textAlign: "center",
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 25,
    backgroundColor: "#10ac94",
    width: "25%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  tapText: {
    color: "#10ac84",
    textAlign: "center",
  },
});
export default LoginScreen;