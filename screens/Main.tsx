import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WordBlock from "../components/WordBlock";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Main() {
  const handleChange = () => {};
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <WordBlock numberOfFields={5} />
        <TouchableOpacity style={styles.submit} onPress={() => {}}>
          <Text style={styles.title}>ENTER</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  submit: {
    marginTop: 20,
    marginBottom: 150,
    width: 200,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    color: "white",
  },
});
