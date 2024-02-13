import { StyleSheet } from "react-native";
import UserView from "../../entity/users/UserView";
import Screen from "../../layout/Screen";

const UserViewScreen = ({ navigation, route }) => {
  // Initialisations ---------------------
  const { user, onDelete, onModify } = route.params;

  // State -------------------------------
  // Handlers ----------------------------
  const gotToModifyScreen = () => {
    navigation.navigate("UserModifyScreen", { user, onModify });
  }; // View --------------------------------

  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotToModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
