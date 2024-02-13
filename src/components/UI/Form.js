import { Platform, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Action from "./Button";
import FormLayout from "../layout/FormLayout";

const Form = ({ children, submitType, onSubmit, onCancel }) => {
  return (
    <FormLayout>
      <KeyboardAvoidingView keyboardVerticalOffset={115} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.formContainer} enabled>
        <ScrollView contentContainerStyle={styles.formItems}>{children}</ScrollView>
      </KeyboardAvoidingView>

      <Action.ButtonTray>
        {submitType === "Add" ? <Action.AddButton onClick={onSubmit} /> : <Action.EditButton onClick={onSubmit} />}
        <Action.CancelButton onClick={onCancel} />
      </Action.ButtonTray>
    </FormLayout>
  );
};

const InputText = ({ label, value, onChange, prompt, keyboardType }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      {prompt ? <Text style={styles.itemPrompt}>{prompt}</Text> : null}
      <TextInput style={styles.itemTextInput} value={value} onChangeText={onChange} keyboardType={keyboardType} />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      {Platform.OS === "ios" ? <Text style={styles.itemPrompt}>{prompt}</Text> : null}

      <Picker mode="dropdown" selectedValue={value} onValueChange={onChange} style={styles.itemPicker}>
        {!Platform.OS === "ios" ? <Picker.Item value={null} label={prompt} itemStyle={styles.itemPromptPicker} enabled={false} /> : null}

        {options.map((option) => (
          <Picker.Item key={option.value} value={option.value} label={option.label} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  formElements: {
    gap: 0,
  },
  formItems: {
    gap: 9,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  itemPicker: {
    backgroundColor: "whitesmoke",
  },
  itemPromptPicker: {
    color: "grey",
  },
  itemPrompt: {
    fontSize: 15,
    color: "red",
  },
});

Form.InputText = InputText;
Form.InputSelect = InputSelect;

export default Form;
