import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModuleAddScreen from "./src/components/screens/module/ModuleAddScreen";
import ModuleListScreen from "./src/components/screens/module/ModuleListScreen";
import ModuleModifyScreen from "./src/components/screens/module/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/module/ModuleViewScreen";
import UserListScreen from "./src/components/screens/user/UserListScreen";
import UserAddScreen from "./src/components/screens/user/UserAddScreen";
import UserModifyScreen from "./src/components/screens/user/UserModifyScreen";
import UserViewScreen from "./src/components/screens/user/UserViewScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Panel = () => {
  return (
    <Drawer.Navigator initialRouteName="Modules">
      <Drawer.Screen name="Modules" component={ModuleListScreen} />
      <Drawer.Screen name="Users" component={UserListScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        intialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Panel" component={Panel} options={{ headerShown: false }} />
          <Stack.Screen name="ModuleAddScreen" component={ModuleAddScreen} options={{ title: "Add modules" }} />
          <Stack.Screen name="ModuleModifyScreen" component={ModuleModifyScreen} options={{ title: "Modfiy modules" }} />
          <Stack.Screen name="ModuleViewScreen" component={ModuleViewScreen} options={{ title: "View modules" }} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="UserAddScreen" component={UserAddScreen} options={{ title: "Add user" }} />
          <Stack.Screen name="UserModifyScreen" component={UserModifyScreen} options={{ title: "Modfiy user" }} />
          <Stack.Screen name="UserViewScreen" component={UserViewScreen} options={{ title: "View user" }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
