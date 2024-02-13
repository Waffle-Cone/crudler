import UserForm from "../../entity/users/UserForm";
import Screen from "../../layout/Screen";

const UserModifyScreen = ({ navigation, route }) => {
  // Initialisations ---------------------
  const { user, onModify } = route.params;
  // State -------------------------------
  // Handlers ----------------------------
  const handleCancel = navigation.goBack;
  return (
    <Screen>
      <UserForm selectedUser={user} onCancel={handleCancel} onSubmit={onModify} />
    </Screen>
  );
};

export default UserModifyScreen;
