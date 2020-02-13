import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

const list = [
  {
    title: 'Meeting with John',
    description: 'regarding the design of the new website',
    time: '12/03/2020 13:00',
    alert: true,
  },
  {
    title: 'Meeting with John',
    description: 'regarding the design of the new website',
    time: '12/03/2020 13:00',
    alert: false,
  },
];

export default class SchedulerList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        {list.map((item, i) => {
          return (
            <ScheduleListItem
              onClick={this.props.onClick}
              key={i}
              title={item.title}
              description={item.description}
              time={item.time}
            />
          );
        })}
      </View>
    );
  }
}

class ScheduleListItem extends Component {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    this.props.onClick(false);
  };
  render() {
    return (
      <View style={styles.scheduleLI}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.sTitle}>{this.props.title}</Text>
          <Text style={styles.sDesc}>{this.props.description}</Text>
          <Text style={styles.sTime}>{this.props.time}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scheduleLI: {
    padding: 30,
    backgroundColor: '#ffa500',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    borderColor: '#ffa500',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
