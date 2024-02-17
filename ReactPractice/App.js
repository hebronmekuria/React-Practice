import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NewScreen from './NewScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      {/* This is the main or defaul screen the app opens  */}
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="NewScreen" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
