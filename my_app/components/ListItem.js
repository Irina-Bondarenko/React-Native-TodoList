import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListItem(props) {
  const deleteHandler = () => {
    props.deleteTaskHandler(props.element.key);
  };
  return (
    <TouchableOpacity onPress={deleteHandler} style={{ borderRadius: 20 }}>
      <Text style={styles.text}>{props.element.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#BDFFEB",

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
    fontSize: 18,
    color: "#18181B",
    fontStyle: "italic",
    textAlign: "center",
  },
});
