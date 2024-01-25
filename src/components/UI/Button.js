import { Pressable, StyleSheet, Text,View } from 'react-native';
import Icons from '../UI/Icons';

const Action = {};

const Button = ({label, icon, onClick, styleButton, styleLabel}) => {
return (
    <Pressable onPress={onClick} style={[styles.button,styleButton]}>
        {icon? icon: null}
        <Text style={[styles.label,styleLabel]}>{label}</Text>
    </Pressable>
);
};

const ButtonTray = ({children}) => {
    return (
      <View style={styles.buttonTray}>
        {children}
      </View>
    );
    };

const EditButton = ({onClick}) => {
        return(
            <Button icon={<Icons.Edit/>} onClick={onClick} label="Modify" />
        )
    };
const DeleteButton = ({onClick}) => {
    return(
        <Button icon={<Icons.Delete/>} onClick={onClick} label="Delete" styleButton={{backgroundColor: 'mistyrose'}} styleLabel={{color:'red'}}/>
    )
};

const AddButton = ({onClick}) => {
    return(
        <Button icon={<Icons.Add/>} onClick={onClick} label="Add" />
    )
};


const styles = StyleSheet.create({
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor:'grey',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
        flexDirection: 'row',
        gap: 5,
    },
    label: {
        fontSize: 16,
    },
});


Action.ButtonTray = ButtonTray;
Action.EditButton = EditButton;
Action.DeleteButton = DeleteButton;
Action.AddButton = AddButton;

export default Action;