import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Display/Home';
import Pemesanan from './Display/Pemesanan';
import Batal from './Display/Batal';
console.reportErrorsAsExceptios = false;
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"home"}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "",
            headerLeft: () => <FontAwesome name="bars" size={24} color="white" style={{ marginLeft: 20 }} />,
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />
       <Stack.Screen
          name="pemesanan"
          component={Pemesanan}
          options={{
            title: "Rincian",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />

        <Stack.Screen
          name="batal"
          component={Batal}
          options={{
            title: "Konfirmasi",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;