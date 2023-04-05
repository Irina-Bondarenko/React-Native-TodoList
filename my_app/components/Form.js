import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Form(props) {
  const [valueFormUser, setValueFormUser] = useState("");

  const onChangeHandler = (text) => {
    setValueFormUser(text);
  };

  const onPressButton = () => {
    props.addHandler(valueFormUser);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeHandler}
        placeholder={"Write task here"}
      />
      <Button color={"green"} title={"Add Task"} onPress={onPressButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
  button: {
    color: "yellow",
  },
});
