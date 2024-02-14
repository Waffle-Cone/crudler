import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import Icons from "./Icons";
import SearchLayout from "../layout/SearchLayout";

const SearchBar = ({ value, onChange, placeholder }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------

  const handleClear = () => {
    onChange(null);
  };
  // View --------------------------------
  return (
    <View style={styles.container}>
      <SearchLayout>
        <Icons.Search />
        <TextInput style={styles.searchBar} placeholder={placeholder} value={value} onChangeText={onChange} />
        {!value ? (
          <Text style={{ width: 25 }}></Text> // placeholder so that the cancel button doesnt shift search input
        ) : (
          <Pressable
            onPress={handleClear}
            style={({ pressed }) => [
              {
                height: pressed ? 1 : 25,
              },
              styles.wrapperCustom,
            ]}
          >
            <Icons.SearchCancel />
          </Pressable>
        )}
      </SearchLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  searchBar: {
    height: 50,
    width: "80%",
    fontSize: 15,
  },
});
export default SearchBar;
