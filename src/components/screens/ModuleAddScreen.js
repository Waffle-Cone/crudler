import { StyleSheet,Text } from 'react-native';
import Screen from '../layout/Screen';
import Action from '../UI/Button';

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: 'Database Driven Web Applications',
  ModuleCode: 'CI6388',
  ModuleLevel: 6,
  ModuleLeaderID: 3,
  ModuleLeaderName: 'Graeme Jones',
  ModuleImage: 'https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg',
}

const ModuleAddScreen = ({navigation, route}) => {
  // Initialisations ---------------------
const {onAdd} = route.params;

// State -------------------------------
// Handlers ----------------------------
const handleAdd = () => onAdd(defaultModule);
const handleCancel = ()=> navigation.goBack();
// View --------------------------------
  return (
      <Screen>  
        <Text>Add</Text>
        <Action.ButtonTray>
          <Action.AddButton onClick={handleAdd}/>
          <Action.CancelButton onClick={handleCancel}/>
        </Action.ButtonTray>
      </Screen> 
      
      
  );
}

const styles = StyleSheet.create({
});

export default ModuleAddScreen;