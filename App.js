import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default class GameBoard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <View
            style={styles.line}
          />
          <View
            style={[styles.line, {
              transform: [
                { translateX: 200 }
              ]
            }]}
          />
          <View
            style={[styles.line, {
              height: 3,
              width: 309,
              transform: [
                { translateY: 100 }
              ]
            }]}
          />
          <View
            style={[styles.line, {
              height: 3,
              width: 309,
              transform: [
                { translateY: 200 }
              ]
            }]}
          />
        </View>
      </View>





    );
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
  },
  board: {
    borderWidth: 3,
    height: 312,
    width: 312,
  },
  line: {
    backgroundColor: '#000',
    height: 309, //312-2*3
    width: 3,
    position: 'absolute',
    transform: [
      { translateX: 100 }
    ]
  },

});
