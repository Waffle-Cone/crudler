import { StyleSheet } from "react-native";

import Screen from "../../layout/Screen";

const UserAddScreen = ({ navigation, route }) => {
  // Initialisations ---------------------
  const { onAdd } = route.params;
  // State -------------------------------
  // Handlers ----------------------------
  const handleCancel = () => navigation.goBack();

  // View --------------------------------
  return (
    <Screen>
      <ModuleForm onCancel={handleCancel} onSubmit={onAdd} submitType={"Add"} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserAddScreen;
