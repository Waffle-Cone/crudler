import { StyleSheet } from "react-native";

import Screen from "../../layout/Screen";

const UserViewScreen = ({ navigation, route }) => {
  // Initialisations ---------------------
  const { module, onDelete, onModify } = route.params;

  // State -------------------------------
  // Handlers ----------------------------
  const gotToModifyScreen = () => {
    navigation.navigate("ModuleModifyScreen", { module, onModify });
  }; // View --------------------------------

  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete} onModify={gotToModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
