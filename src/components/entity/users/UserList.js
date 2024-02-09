import { ScrollView, StyleSheet } from "react-native";
import UserItem from "./UserItem";

const UserList = ({ users, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <ScrollView style={styles.container}>
      {users.map((user) => {
        return <UserItem key={user.UserID} user={user} onSelect={onSelect} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserList;
