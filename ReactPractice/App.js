import { useState } from 'react';
import {Text, View, ScrollView, StyleSheet, Image, TextInput} from 'react-native';

const logo = require('/Users/hebronmekuria/React-Practice/ReactPractice/assets/heart.png');
const Login = () => {
  const [username, setUserName]=useState("")
  const [password, setPassword]=useState("")
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Twin Tok</Text>
      <Image source={logo} style={styles.heart} />
      <TextInput
      value={username}
      onChangeText={setUserName}
      placeholder='Username'
      style={styles.username}
      />
      <TextInput
      value={password}
      onChangeText={setPassword}
      style={styles.username}
      placeholder='Password'
      />
       
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
      alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    paddingTop: 70,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  heart: {
    width:100,
    height:100,
    padding:70,
  },
  username: {
     height: 30,
     borderColor:"pink",
     borderWidth: 1,
     width:200,
     padding:20,
     borderRadius:10,
     margin:10
  }
});
