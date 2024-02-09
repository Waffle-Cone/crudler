import { useState, useEffect } from "react";
import { ActivityIndicator, LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";
import Action from "../UI/Button";
import useLoad from "../API/useLoad";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
  const modulesEndpoint = `https://softwarehub.uk/unibase/api/modules`;

  // State -------------------------------
  const [modules, setModules, isLoading, loadRecords] = useLoad(modulesEndpoint);

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

  const handleModify = (updateModule) => setModules(modules.map((module) => (module.ModuleID === updateModule.ModuleID ? updateModule : module)));

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
      {isLoading ? <ActivityIndicator size="large" color="#4CCBD0" style={styles.loading} /> : null}
      <ModuleList modules={modules} onSelect={gotToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ModuleListScreen;
