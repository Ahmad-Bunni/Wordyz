import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { InputEventType } from "../models/InputEventType";
import CharacterInput from "./CharacterInput";

export default function WordBlock({
  numberOfFields,
}: {
  numberOfFields: number;
}) {
  const [numberOfCharacters, setNumOfFields] = useState(numberOfFields);
  const fieldsRef = useRef<any>([]);
  const [resetValue, setResetValue] = useState(false);
  const [fieldsValues, setFieldsValues] = useState([{}]);

  React.useEffect(() => {
    fieldsRef.current = new Array(numberOfCharacters);
  }, []);

  React.useEffect(() => {
    setNumOfFields(numberOfFields);
    setResetValue(true);

    fieldsRef.current[0]?.focus() as any;
  }, [numberOfFields]);

  const handleChange = (index: any, eventType: InputEventType) => {
    if (eventType === InputEventType.Add && fieldsRef.current[index + 1]) {
      fieldsRef.current[index + 1].focus();
      fieldsValues[fieldsRef.current] = "c";
      setFieldsValues(fieldsValues);
    }

    if (
      eventType === InputEventType.Add &&
      index + 1 === Object.keys(fieldsRef.current).length
    ) {
      fieldsRef.current[index].blur();
      console.log(fieldsValues);
    }

    if (eventType === InputEventType.Remove && fieldsRef.current[index - 1]) {
      fieldsRef.current[index - 1].focus();
    }
  };

  const resetValueComplete = () => {
    setResetValue(false);
  };

  return (
    <View style={styles.container}>
      {[...Array(numberOfCharacters)].map((_, index) => {
        return (
          <CharacterInput
            key={index}
            index={index}
            resetValue={resetValue}
            reference={(el: any) => (fieldsRef.current[index] = el)}
            handleChange={handleChange}
            resetValueComplete={resetValueComplete}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
