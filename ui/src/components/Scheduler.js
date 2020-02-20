import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native';

export default class Scheduler extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.scheduler}>
        <View>
          <TextInput style={styles.title} placeholder="Title" />
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            editable
            placeholder="Description"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scheduler: {
    padding: 20,
  },
  textArea: {
    marginTop: 20,
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  title: {
    fontSize: 30,
  },
});
