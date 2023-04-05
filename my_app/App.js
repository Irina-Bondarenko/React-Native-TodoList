import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy milk", key: "0" },
    { text: "Read book", key: "2" },
    { text: "Wash dishes", key: "3" },
    { text: "Clean mind", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };

  const deleteTaskHandler = (keyElem) => {
    setListOfItems((list) => {
      return list.filter((item) => item.key !== keyElem);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem element={item} deleteTaskHandler={deleteTaskHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
