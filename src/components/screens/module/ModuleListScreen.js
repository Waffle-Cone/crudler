import { useState, useEffect } from "react";
import { ActivityIndicator, LogBox, StyleSheet } from "react-native";
import Screen from "../../layout/Screen";
import ModuleList from "../../entity/modules/ModuleList";
import Action from "../../UI/Button";
import useLoad from "../../API/useLoad";
import SearchBar from "../../UI/SearchBar";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
  const modulesEndpoint = `https://softwarehub.uk/unibase/api/modules`;

  // State -------------------------------
  const [modules, setModules, isLoading, loadRecords] = useLoad(modulesEndpoint);
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = (search) => {
    setSearch(search);
    if (search != null) {
      setSearchResults(
        modules.filter((item) => {
          return item.ModuleName.includes(search);
        })
      );
    }
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.navigate("Modules");
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.navigate("Modules");
  };
  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("Modules");
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
      <SearchBar placeholder={"Search module name..."} value={search} onChange={handleSearch} />
      {isLoading ? <ActivityIndicator size="large" color="#4CCBD0" style={styles.loading} /> : null}
      {!search ? <ModuleList modules={modules} onSelect={gotToViewScreen} /> : <ModuleList modules={searchResults} onSelect={gotToViewScreen} />}
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
