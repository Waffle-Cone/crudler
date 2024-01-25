import { Alert, StyleSheet, Text,View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'
import Action from '../../UI/Button';

const ModuleView = ({module, onDelete}) =>{
    // Initialisations ---------------------
    // State -------------------------------
    // Handlers ----------------------------
    const handleDelete = ()=>onDelete(module)

    const requestDelete =()=> Alert.alert(
      'Delete warning',
      `Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}`,
      [
        {text: 'Cancel'},
        {text: 'Delete', onPress: handleDelete}
      ]
    );
    // View --------------------------------
    return (
        <View style={styles.container}>
            <FullWidthImage source={{uri: module.ModuleImage}} style={styles.image} />
          
            <View style= {styles.infoTray}> 
              <Text style= {styles.boldtext}>
                {module.ModuleCode} {module.ModuleName}
                </Text>
              <Text style= {styles.text}>Level {module.ModuleLevel}</Text>
              <Text style= {styles.text}>{module.ModuleLeaderName} <Text style= {styles.dimText}>(Module leader)</Text></Text>
            </View> 

            <Action.ButtonTray>  
              <Action.EditButton onClick={()=>alert("Edit")}/>
              <Action.DeleteButton onClick={requestDelete} />
            </Action.ButtonTray>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      gap:15,
    },
    infoTray:{
      gap: 5,
    },
    image: {
      borderRadius: 3, 
    },
    text:{
      fontSize:16,
    },
    boldtext:{
      fontSize:16,
      fontWeight:'bold',
    },
    dimText:{
      color:'grey',
    }
  })


export default ModuleView;