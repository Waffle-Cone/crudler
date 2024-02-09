import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Component = () => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return <></>;
};

const styles = StyleSheet.create({});
export default Component;

<Stack.Navigator
  intialRouteName="UserListScreen"
  screenOptions={{
    headerStyle: { backgroundColor: "black" },
    headerTintColor: "white",
  }}
>
  <Stack.Screen name="UserListScreen" component={UserListScreen} options={{ title: "List user" }} />
  <Stack.Screen name="UserAddScreen" component={UserAddScreen} options={{ title: "Add user" }} />
  <Stack.Screen name="UserModifyScreen" component={UserModifyScreen} options={{ title: "Modfiy user" }} />
  <Stack.Screen name="UserViewScreen" component={UserViewScreen} options={{ title: "View user" }} />
</Stack.Navigator>;
