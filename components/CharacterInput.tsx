import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { InputEventType } from "../models/InputEventType";

export default function CharacterInput({
  handleChange,
  resetValueComplete,
  reference,
  index,
  resetValue,
}: {
  handleChange: (index: any, eventType: InputEventType) => void;
  resetValueComplete: () => void;
  reference: any;
  index: number;
  resetValue: boolean;
}) {
  const [value, setValue] = useState("");

  React.useEffect(() => {
    if (resetValue) {
      setValue("");
      resetValueComplete();
    }
  }, [resetValue]);

  const handleOnTextChange = (text: string, key: string) => {
    if (text) {
      setValue(text.toUpperCase());
      handleChange(index, InputEventType.Add);
    } else if (!key) {
      setValue("");
      handleChange(index, InputEventType.Remove);
    } else if (key) {
      if (!value && key.toLocaleLowerCase() === "backspace") {
        handleChange(index, InputEventType.Remove);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        ref={reference}
        style={styles.input}
        selectTextOnFocus={true}
        maxLength={1}
        autoCapitalize="characters"
        onKeyPress={(event) => {
          handleOnTextChange("", event.nativeEvent.key);
        }}
        onChangeText={(text) => handleOnTextChange(text, "")}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "white",
    borderWidth: 1.5,
    fontSize: 20,
    width: 40,
    height: 40,
    margin: 1,
    color: "white",
    textAlign: "center",
  },
});
