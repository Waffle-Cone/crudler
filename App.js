
import { NavigationContainer} from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';

const Stack = createNativeStackNavigator();


  const App = () =>{
   // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------

  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName = 'ModuleScreen'>
        <Stack.Screen
        name='ModuleListScreen'
        component={ModuleListScreen}
        options={{title: 'List modules'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}