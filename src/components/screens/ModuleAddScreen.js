import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import ModuleForm from '../entity/modules/ModuleForm';
import Screen from '../layout/Screen';

const ModuleAddScreen = ({navigation, route}) => {
  // Initialisations ---------------------
const {onAdd} = route.params;
// State -------------------------------
// Handlers ----------------------------
const handleCancel = ()=> navigation.goBack();


// View --------------------------------
  return (
      <Screen>
        <ModuleForm onCancel={handleCancel}  onSubmit={onAdd} submitType={'Add'}/>      
      </Screen>  
  );
}

const styles = StyleSheet.create({});

export default ModuleAddScreen;