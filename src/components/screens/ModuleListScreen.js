import { useState } from 'react';
import {LogBox,StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js'
import ModuleList from '../entity/modules/ModuleList';
import RenderCount from '../UI/renderCount';
import Action from '../UI/Button';

const ModuleListScreen = ({navigation}) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  // State -------------------------------
  const [modules, setModules] = useState(initialModules);
  // Handlers ----------------------------
 
  const handleDelete = (module) =>  setModules(modules.filter((item)=>{ return( item.ModuleID !== module.ModuleID)}))

  const onDelete = (module) =>{
    handleDelete(module);
    navigation.goBack();
  }

  const handleAdd = () => {navigation.navigate('ModuleAddScreen',{})}


  const handleSelect = (module) => {navigation.navigate('ModuleViewScreen',{module, onDelete})}


 
  // View -------------------------------- 

  return (
      <Screen>
        <Action.ButtonTray>
          <Action.AddButton onClick={handleAdd}/>
        </Action.ButtonTray>
          <ModuleList modules={modules} onSelect={handleSelect}/>
      </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleListScreen;