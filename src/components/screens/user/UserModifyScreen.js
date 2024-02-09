import { Text } from "react-native";

import Screen from "../../layout/Screen";

const UserModifyScreen = ({ navigation, route }) => {
  // Initialisations ---------------------
  const { module, onModify } = route.params;
  // State -------------------------------
  // Handlers ----------------------------
  const handleCancel = navigation.goBack;
  return (
    <Screen>
      <ModuleForm selectedModule={module} onCancel={handleCancel} onSubmit={onModify} />
    </Screen>
  );
};

export default UserModifyScreen;
