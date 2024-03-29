import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native';
import NewScreen from './NewScreen';
const logo = require('/Users/hebronmekuria/React-Practice/ReactPractice/assets/heart.png');

const HomeScreen = ({navigation}) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
      
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Twin Tok</Text>
          <Image source={logo} style={styles.heart} />
          <View style={styles.input}>
            <TextInput
              value={username}
              onChangeText={setUserName}
              placeholder="Username"
              style={styles.username}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.username}
              placeholder="Password"
            />
          </View>
          
          <Text style={styles.fg}>Forgot Password</Text>
          <Button
          title="Select"
          onPress={()=>navigation.navigate('NewScreen')}
          />
          
        </View>
      </ScrollView>
    );
  };
export default HomeScreen;  

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      paddingTop: 70,
      textTransform: 'uppercase',
      fontSize: 20,
    },
    heart: {
      width: 100,
      height: 100,
      padding: 70,
    },
    username: {
      height: 30,
      borderColor: '#f22e66',
      borderWidth: 1,
      width: 200,
      padding: 20,
      borderRadius: 10,
      margin: 10,
    },
    input: {
      marginTop: 80,
    },
    fg: {
      textAlign: 'center',
      fontSize: 10,
      color: '#f22e66',
  
    },
  });
  