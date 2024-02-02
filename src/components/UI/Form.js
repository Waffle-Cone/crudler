import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Action from "./Button";

const Form = ({ children, submitType, onSubmit, onCancel }) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.formContainer}
      enabled
    >
      <View style={styles.formElements}>
        <ScrollView contentContainerStyle={styles.formItems}>
          {children}
        </ScrollView>

        <Action.ButtonTray>
          {submitType === "Add" ? (
            <Action.AddButton onClick={onSubmit} />
          ) : (
            <Action.EditButton onClick={onSubmit} />
          )}
          <Action.CancelButton onClick={onCancel} />
        </Action.ButtonTray>
      </View>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        style={styles.itemTextInput}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        style={styles.itemPicker}
      >
        <Picker.Item
          value={null}
          label={prompt}
          style={styles.itemPromptPicker}
        />
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            value={option.value}
            label={option.label}
          />
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
    gap: 20,
  },
  formItems: {
    gap: 1,
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
});

Form.InputText = InputText;
Form.InputSelect = InputSelect;

export default Form;
