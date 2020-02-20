import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import Header from "./src/components/Header";
import SchedulerList from "./src/components/SchedulerList";
import Scheduler from "./src/components/Scheduler";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true
    };
    this.onIsHomeChange = this.onIsHomeChange.bind(this);
  }

  onIsHomeChange(value) {
    this.setState({
      isHome: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" StatusBarStyle="dark-content" />
        <View style={styles.header}>
          <Header onClick={this.onIsHomeChange} isHome={this.state.isHome} />
        </View>
        <View style={styles.main}>
          {this.state.isHome ? (
            <SchedulerList onClick={this.onIsHomeChange} />
          ) : (
            <Scheduler onClick={this.onIsHomeChange} />
          )}
        </View>
        <View style={styles.addBtnHolder}>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => this.onIsHomeChange(!this.state.isHome)}
          >
            {/* <Text style={styles.addTxt}>+</Text> */}
            {this.state.isHome ? <PlusIcon /> : <TickIcon />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const PlusIcon = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.horizontal} />
      <View style={styles.vertical} />
    </View>
  );
};

const TickIcon = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.short} />
      <View style={styles.long} />
    </View>
  );
};

const plusBtn = {
  height: 5,
  marginTop: 30,
  width: 30,
  backgroundColor: "black"
};

const styles = StyleSheet.create({
  hide: {
    display: "none"
  },
  addBtnHolder: {
    alignItems: "flex-end",
    marginRight: 10
  },
  main: {
    flex: 0.9
  },
  addBtn: {
    backgroundColor: "#1e90ff",
    borderRadius: 40,
    marginRight: 10,
    marginTop: 10,
    padding: 2,
    width: 70,
    alignItems: "center",
    height: 70,
    position: "absolute",
    bottom: 0,
    elevation: 5
  },
  addTxt: {
    fontSize: 50
  },
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    marginBottom: 30
  },
  horizontal: {
    ...plusBtn
  },
  vertical: {
    ...plusBtn,
    marginTop: -5,
    position: "relative",
    transform: [{ rotate: "90deg" }]
  },
  short: {
    height: 5,
    marginTop: 35,
    marginLeft: -20,
    width: 15,
    backgroundColor: "black",
    transform: [{ rotate: "45deg" }]
  },
  long: {
    height: 5,
    marginTop: -12,
    marginLeft: 15,
    transform: [{ rotate: "135deg" }],
    width: 40,
    backgroundColor: "black"
  }
});
