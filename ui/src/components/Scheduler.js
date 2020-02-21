import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native";

export default class Scheduler extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.scheduler}>
        <View>
          <TextInput
            style={styles.title}
            onChangeText={text => this.props.onSchUpdate({ title: text })}
            placeholder="Title"
            value={this.props.item.title}
          />
          <TextInput
            onChangeText={text => this.props.onSchUpdate({ desc: text })}
            style={styles.textArea}
            multiline
            numberOfLines={4}
            editable
            placeholder="Description"
            value={this.props.item.desc}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scheduler: {
    padding: 20
  },
  textArea: {
    marginTop: 20,
    fontSize: 20,
    borderStyle: "solid",
    borderColor: "black",
    color: "white"
  },
  title: {
    fontSize: 30,
    color: "white"
  }
});
