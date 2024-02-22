import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import useLoad from "../../API/useLoad";
import Form from "../../UI/Form";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserLevel: 3,
  UserRegistered: null,
  UserYearID: 1, // the selector starts on "2022-23" = Default
  UserUsertypeID: 1, // the selector starts on staff = Default
  UserImageURL: null,
  UserUsertypeName: "Staff", // the selector starts on staff = Default
  UserYearName: "2022-23", // the selector starts on "2022-23" = Default
};

const UserForm = ({ selectedUser, onCancel, onSubmit, submitType }) => {
  // Initialisations ---------------------
  defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
  defaultUser.UserImageURL =
    "https://images.generated.photos/MEhzHfD0AtIoLUVj5R4QKAmyaS87QnLhEpGvxxjwVcI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg5NTA2LmpwZw.jpg";

  //Teachers have to have a special year id and year name set up
  if (selectedUser.UserUsertypeID === 1) {
    selectedUser.UserLevel = 1;
    selectedUser.UserYearID = 90;
    selectedUser.UserYearName = "N/A";
  }

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First Year)" },
    { value: 5, label: "5 (Second Year)" },
    { value: 6, label: "6 (Final Year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  const errorMessage = {
    UserFirstname: "Please enter your first name",
    UserLastname: "Please enter your last name",
    UserEmail: "Please enter valid email",
  };

  const typesOfUsers = [];
  const userTypeEndpoint = "https://softwarehub.uk/unibase/api/usertypes";

  const yearSelection = [];
  const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";

  // State -------------------------------
  const [user, setUser] = useState(selectedUser || defaultUser);
  const [userTypes, setUserTypes] = useLoad(userTypeEndpoint);
  const [years, setYear] = useLoad(yearsEndpoint);
  const [errors, setErrors] = useState(Object.keys(user).reduce((acc, key) => ({ ...acc, [key]: null }), {}));

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  userTypes.forEach((type) => typesOfUsers.push({ value: type.UsertypeID, label: type.UsertypeName })); // making the recived usertypes into something we can use value and label pairs
  years.forEach((year) => yearSelection.push({ value: year.YearID, label: year.YearName }));

  yearSelection.push({ value: 90, label: "N/A" });
  // Handlers ----------------------------

  const errorCheck = (user) => {
    let isUserValid = true;
    Object.keys(user).forEach((key) => {
      //console.log(`${key}  ${!user[key]}`);
      if (key === "UserRegistered") {
        errors[key] = null;
      } else if (!user[key]) {
        errors[key] = errorMessage[key];
        isUserValid = false;
      } else {
        errors[key] = null;
      }

      // email validation
      if (key === "UserEmail") {
        if (user["UserEmail"] && !user["UserEmail"].match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")) {
          isUserValid = false;
          errors["UserEmail"] = errorMessage["UserEmail"];
        }
      }
    });
    return isUserValid;
  };

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

  const handleSubmit = () => {
    const check = errorCheck(user);
    console.log(errors);
    console.log(user);
    setErrors({ ...errors });
    if (check) {
      onSubmit(user);
    }
  };

  // View --------------------------------

  return (
    <Form submitType={submitType} onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.InputText label={"Firstname"} value={user.UserFirstname} onChange={(value) => handleChange("UserFirstname", value)} error={errors["UserFirstname"]} />
      <Form.InputText label={"Lastname"} value={user.UserLastname} onChange={(value) => handleChange("UserLastname", value)} error={errors["UserLastname"]} />
      <Form.InputSelect
        label="User Type"
        prompt="Select user type"
        options={typesOfUsers}
        value={user.UserUsertypeID}
        onChange={(value) => handleChange("UserUsertypeID", value, "UserUsertypeName")}
      />
      <Form.InputText label={"Email"} value={user.UserEmail} onChange={(value) => handleChange("UserEmail", value)} error={errors["UserEmail"]} />

      <Form.InputSelect label="User Level" prompt="Select user level" options={levels} value={user.UserLevel} onChange={(value) => handleChange("UserLevel", value)} />
      <Form.InputSelect
        label="Year"
        prompt="Select user year"
        options={yearSelection}
        value={user.UserYearID}
        onChange={(value) => handleChange("UserYearID", value, "UserYearName")}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
