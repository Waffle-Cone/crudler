import {StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js'
import ModuleList from '../entity/modules/ModuleList';

const ModuleListScreen = () => {
  // Initialisations ---------------------
  const modules = initialModules; // module data

  // State -------------------------------
  // Handlers ----------------------------
 const handleSelect = (module)=>{alert(`Item ${module.ModuleCode} Selected`)};
  // View --------------------------------

  return (
      <Screen>  
        <ModuleList modules={modules} onSelect={handleSelect}/>
      </Screen> 
      
      
  );
}

const styles = StyleSheet.create({});

export default ModuleListScreen;