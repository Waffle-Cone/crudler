import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Action from "../../UI/Button";

const UserView = ({ user, onDelete, onModify }) => {
  // Initialisations ---------------------
  const knumber = user.UserEmail.split("@")[0]; // get the K number the student from email
  // State -------------------------------
  // Handlers ----------------------------
  const handleDelete = () => onDelete(user);

  const requestDelete = () =>
    Alert.alert("Delete warning", `Are you sure you want to delete user ${knumber}: ${user.UserFirstname} ${user.UserLastname}`, [
      { text: "Cancel" },
      { text: "Delete", onPress: handleDelete },
    ]);
  // View --------------------------------
  return (
    <View style={styles.container}>
      <FullWidthImage source={{ uri: user.UserImageURL }} style={styles.image} width={256} height={256} />

      <View style={styles.infoTray}>
        <Text style={styles.boldtext}>{user.UserEmail}</Text>
        <Text style={styles.text}>Level {user.UserLevel}</Text>
        <Text style={styles.text}>Year {user.UserYearName}</Text>
        <Text style={styles.text}>
          {user.UserFirstname} {user.UserLastname} <Text style={styles.dimText}>({user.UserUsertypeName})</Text>
        </Text>
      </View>

      <Action.ButtonTray>
        <Action.EditButton onClick={onModify} />
        <Action.DeleteButton onClick={requestDelete} />
      </Action.ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  infoTray: {
    gap: 5,
  },
  image: {
    width: 256,
    height: 256,
    borderRadius: 3,
  },
  text: {
    fontSize: 16,
  },
  boldtext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default UserView;
