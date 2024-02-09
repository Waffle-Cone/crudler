import { Text } from "react-native";
import ModuleForm from "../../entity/modules/ModuleForm";
import Screen from "../../layout/Screen";

const ModuleModifyScreen = ({ navigation, route }) => {
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

export default ModuleModifyScreen;
