import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default class Header extends Component {
  onBackClick = () => {
    this.props.onClick(true);
  };
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.onBackClick} style={styles.backBtn}>
          {this.props.isHome ? (
            <Hamburger />
          ) : (
            <Text style={styles.backTxt}>{"<"}</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.headerText}>Scheduler</Text>
      </View>
    );
  }
}

const Hamburger = () => {
  return (
    <>
      <View style={styles.hamburgerBar} />
      <View style={styles.hamburgerBar} />
      <View style={styles.hamburgerBar} />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    height: 100,
    backgroundColor: "#1e90ff",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10
  },
  backBtn: {
    width: 40,
    marginRight: 20
  },
  backTxt: {
    fontSize: 50,
    color: "white"
  },
  headerText: {
    fontSize: 40,
    color: "white"
  },
  hamburgerBar: {
    innerWidth: 35,
    height: 5,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5
  }
});
