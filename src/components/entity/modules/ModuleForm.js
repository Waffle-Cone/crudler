import { useEffect } from "react";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import Form from "../../UI/Form";

const defaultModule = {
  ModuleID: null,
  ModuleName: null,
  ModuleCode: null,
  ModuleLevel: 3, // the selector starts on level 3 = Deafault
  ModuleLeaderName: null,
  ModuleImageURL: null,
};

const ModuleForm = ({ selectedModule, onCancel, onSubmit, submitType }) => {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImageURL = "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg";

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First Year)" },
    { value: 5, label: "5 (Second Year)" },
    { value: 6, label: "6 (Final Year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  const errorMessage = {
    ModuleName: "Please enter your Module name",
    ModuleCode: "Please enter your Module code",
    ModuleLeaderName: "Please enter Leader name",
  };

  // State -------------------------------
  const [module, setModule] = useState(selectedModule || defaultModule);
  const [errors, setErrors] = useState(Object.keys(module).reduce((acc, key) => ({ ...acc, [key]: null }), {}));

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  // Handlers ----------------------------
  const errorCheck = (module) => {
    let ismoduleValid = true;
    Object.keys(module).forEach((key) => {
      if (!module[key]) {
        errors[key] = errorMessage[key];
        ismoduleValid = false;
      } else {
        errors[key] = null;
      }
    });
    return ismoduleValid;
  };

  const handleChange = (field, value) => {
    setModule({ ...module, [field]: value });
  };
  const handleSubmit = () => {
    const check = errorCheck(module);
    setErrors({ ...errors });
    if (check) {
      onSubmit(module);
    }
  };

  // View --------------------------------

  return (
    <Form submitType={submitType} onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.InputText label={"Module Code"} value={module.ModuleCode} onChange={(value) => handleChange("ModuleCode", value)} error={errors["ModuleCode"]} />
      <Form.InputText label={"Module Name"} value={module.ModuleName} onChange={(value) => handleChange("ModuleName", value)} error={errors["ModuleName"]} />
      <Form.InputSelect label="Module Level" prompt="Select module level" options={levels} value={module.ModuleLevel} onChange={(value) => handleChange("ModuleLevel", value)} />

      <Form.InputText label={"Module Leader"} value={module.ModuleLeaderName} onChange={(value) => handleChange("ModuleLeaderName", value)} error={errors["ModuleLeaderName"]} />
      <Form.InputText label={"Module Image URL"} value={module.ModuleImageURL} onChange={(value) => handleChange("ModuleImageURL", value)} />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
