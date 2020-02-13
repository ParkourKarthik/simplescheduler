import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';


export default class Header extends Component {
  onBackClick = () => {
    this.props.onClick(true);
  };
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.onBackClick} style={styles.backBtn}>
          <Text style={styles.backTxt}>{this.props.isHome ? 'M' : '<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Scheduler</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    height: 100,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 60,
    paddingLeft: 10,
  },
  backBtn: {
    width: 40,
  },
  backTxt: {
    fontSize: 40,
    color: 'white'
  },
  headerText: {
  fontSize: 40,
    color: 'white',
  }
});