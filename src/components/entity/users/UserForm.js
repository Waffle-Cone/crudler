import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import useLoad from "../../API/useLoad";
import Form from "../../UI/Form";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserRegistered: null,
  UserLevel: null,
  UserYearID: null,
  UserUsertypeID: null,
  UserImageURL: null,
  UserUsertypeName: null,
  UserYearName: null,
};

const UserForm = ({ selectedUser, onCancel, onSubmit, submitType }) => {
  // Initialisations ---------------------
  defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
  defaultUser.UserImageURL =
    "https://images.generated.photos/MEhzHfD0AtIoLUVj5R4QKAmyaS87QnLhEpGvxxjwVcI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg5NTA2LmpwZw.jpg";

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First Year)" },
    { value: 5, label: "5 (Second Year)" },
    { value: 6, label: "6 (Final Year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  const typesOfUsers = [];
  const userTypeEndpoint = "https://softwarehub.uk/unibase/api/usertypes";

  const yearSelection = [];
  const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";

  // State -------------------------------
  const [user, setUser] = useState(selectedUser || defaultUser);
  const [userTypes, setUserTypes] = useLoad(userTypeEndpoint);
  const [years, setYear] = useLoad(yearsEndpoint);

  userTypes.forEach((type) => typesOfUsers.push({ value: type.UsertypeID, label: type.UsertypeName })); // making the recived usertypes into something we can use
  years.forEach((year) => yearSelection.push({ value: year.YearID, label: year.YearName }));

  // Handlers ----------------------------

  const handleChange = (field, value, correspondingField) => {
    let correspondingValue = "";

    if (correspondingField === undefined || value === null) {
      setUser({ ...user, [field]: value });
    } else if (correspondingField === "UserUsertypeName") {
      // the correspondingField is the text firled which should change due to a change in ID values
      correspondingValue = typesOfUsers.find((user) => user.value === value).label;
      setUser({ ...user, [field]: value, [correspondingField]: correspondingValue });
    } else if (correspondingField === "UserYearName") {
      correspondingValue = yearSelection.find((year) => year.value === value);
      setUser({ ...user, [field]: value, [correspondingField]: correspondingValue });
    }
  };
  const handleSubmit = () => onSubmit(user);

  // View --------------------------------

  return (
    <Form submitType={submitType} onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.InputText label={"Firstname"} value={user.UserFirstname} onChange={(value) => handleChange("UserFirstname", value)} />
      <Form.InputText label={"Lastname"} value={user.UserLastname} onChange={(value) => handleChange("UserLastname", value)} />
      <Form.InputSelect
        label="User Type"
        prompt="Select user type"
        options={typesOfUsers}
        value={user.UserUsertypeID}
        onChange={(value) => handleChange("UserUsertypeID", value, "UserUsertypeName")}
      />
      <Form.InputText label={"Email"} value={user.UserEmail} onChange={(value) => handleChange("UserEmail", value)} />

      <Form.InputSelect label="User Level" prompt="Select user level" options={levels} value={user.UserLevel} onChange={(value) => handleChange("UserLevel", value)} />
      <Form.InputSelect
        label="User Level"
        prompt="Select user level"
        options={yearSelection}
        value={user.UserYearID}
        onChange={(value) => handleChange("UserYearID", value, "UserYearName")}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
