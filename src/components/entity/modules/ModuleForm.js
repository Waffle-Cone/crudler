import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import Form from "../../UI/Form";

const defaultModule = {
  ModuleID: null,
  ModuleName: null,
  ModuleCode: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
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

  // State -------------------------------
  const [module, setModule] = useState(selectedModule || defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) => {
    setModule({ ...module, [field]: value });
  };
  const handleSubmit = () => onSubmit(module);

  // View --------------------------------

  return (
    <Form submitType={submitType} onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.InputText label={"Module code"} value={module.ModuleCode} onChange={(value) => handleChange("ModuleCode", value)} />
      <Form.InputText label={"Module name"} value={module.ModuleName} onChange={(value) => handleChange("ModuleName", value)} />
      <Form.InputSelect label="Module level" prompt="Select module level..." options={levels} value={module.ModuleLevel} onChange={(value) => handleChange("ModuleLevel", value)} />

      <Form.InputText label={"Module leader"} value={module.ModuleLeaderName} onChange={(value) => handleChange("ModuleLeaderName", value)} />
      <Form.InputText label={"Module image URL"} value={module.ModuleImageURL} onChange={(value) => handleChange("ModuleImageURL", value)} />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
