import { useState, useEffect } from "react";
import { ActivityIndicator, LogBox, StyleSheet } from "react-native";
import Screen from "../../layout/Screen";
import Action from "../../UI/Button";
import useLoad from "../../API/useLoad";
import UserList from "../../entity/users/UserList";

const UserListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
  const usersEndpoint = `https://softwarehub.uk/unibase/api/users`;

  // State -------------------------------
  const [users, setUsers, isLoading, loadRecords] = useLoad(usersEndpoint);

  // Handlers ----------------------------
  const handleDelete = (user) =>
    setUsers(
      users.filter((item) => {
        return item.UserID !== user.UserID;
      })
    );

  const handleAdd = (user) => {
    setUsers([...users, user]);
  };

  const handleModify = (updateUser) => setUsers(users.map((user) => (user.UserID === updateUser.UserID ? updateUser : user)));

  const onDelete = (user) => {
    handleDelete(user);
    navigation.goBack();
  };

  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  };
  const onModify = (user) => {
    handleModify(user);
    navigation.navigate("UserListScreen");
  };

  const gotToViewScreen = (user) => {
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });
  };
  const goToAddScreen = () => {
    navigation.navigate("UserAddScreen", { onAdd });
  };

  // View --------------------------------

  return (
    <Screen>
      <Action.ButtonTray>
        <Action.AddButton onClick={goToAddScreen} />
      </Action.ButtonTray>
      {isLoading ? <ActivityIndicator size="large" color="#4CCBD0" style={styles.loading} /> : null}
      <UserList users={users} onSelect={gotToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});

export default UserListScreen;
