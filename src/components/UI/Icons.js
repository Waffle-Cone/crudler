import { MaterialIcons } from "@expo/vector-icons";

const Icons = {};

const Add = () => <MaterialIcons name="add" size={16} />;
const Submit = () => <MaterialIcons name="check" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Cancel = () => <MaterialIcons name="cancel" size={16} />;

Icons.Add = Add;
Icons.Submit = Submit;
Icons.Edit = Edit;
Icons.Delete = Delete;
Icons.Cancel = Cancel;

export default Icons;
