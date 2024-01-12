
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';

const Stack = createNativeStackNavigator();


  const App = () =>{
   // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------

  return (
    <NavigationContainer>
      <Stack.Navigator 
      intialRouteName = 'ModuleScreen'
      screenOptions= {{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
      }}
      >
        <Stack.Screen
        name='ModuleListScreen'
        component={ModuleListScreen}
        options={{title: 'List modules'}}
        />
        <Stack.Screen
        name='ModuleAddScreen'
        component={ModuleAddScreen}
        options={{title: 'List modules'}}
        />
        <Stack.Screen
        name='ModuleModifyScreen'
        component={ModuleModifyScreen}
        options={{title: 'List modules'}}
        />
        <Stack.Screen
        name='ModuleViewScreen'
        component={ModuleViewScreen}
        options={{title: 'List modules'}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;