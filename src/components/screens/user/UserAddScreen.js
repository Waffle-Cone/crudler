import { StyleSheet } from "react-native";
import UserForm from "../../entity/users/UserForm";
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
      <UserForm onCancel={handleCancel} onSubmit={onAdd} submitType={"Add"} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserAddScreen;
