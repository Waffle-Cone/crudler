import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList";
import RenderCount from "../UI/renderCount";
import Action from "../UI/Button";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  // State -------------------------------
  const [modules, setModules] = useState(initialModules);
  // Handlers ----------------------------

  const handleDelete = (module) =>
    setModules(
      modules.filter((item) => {
        return item.ModuleID !== module.ModuleID;
      })
    );

  const handleAdd = (module) => {
    setModules([...modules, module]);
  };

  const handleModify = (updateModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updateModule.ModuleID ? updateModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };
  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };

  const gotToViewScreen = (module) => {
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  };
  const goToAddScreen = () => {
    navigation.navigate("ModuleAddScreen", { onAdd });
  };

  // View --------------------------------

  return (
    <Screen>
      <Action.ButtonTray>
        <Action.AddButton onClick={goToAddScreen} />
      </Action.ButtonTray>
      <ModuleList modules={modules} onSelect={gotToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
