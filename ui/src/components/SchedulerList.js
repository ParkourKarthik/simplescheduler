import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { GetAll } from '../services/schedules';

export default class SchedulerList extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      sList: [],
      loader: true
    };
  }

  componentDidMount() {
    this._isMounted = true;
    GetAll()
      .then(res => {
        if (this._isMounted) {
          this.setState({
            sList: res,
            loader: false
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View>
        {this.state.loader ? (
          <ActivityIndicator size='large' color='#ffa500' />
        ) : (
          this.state.sList.map((item, i) => {
            return (
              <ScheduleListItem
                onClick={this.props.onClick}
                key={item._id}
                _id={item._id}
                title={item.title}
                desc={item.desc}
                time={item.time}
              />
            );
          })
        )}
      </View>
    );
  }
}

class ScheduleListItem extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.onClick(this.props._id);
  };
  render() {
    return (
      <View style={styles.scheduleLI}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.sTitle}>{this.props.title}</Text>
          <Text style={styles.sDesc}>{this.props.desc}</Text>
          <Text style={styles.sTime}>{this.props.time}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sTitle: {
    fontSize: 20,
    fontWeight: 'bold'
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
