import React, { Component } from 'react';
import { AppRegistry, ScrollView, TextInput, TouchableNativeFeedback, Alert, Button, StyleSheet, Text, View, Image } from 'react-native';

export default class PizzaTranslator extends Component {
  _onPressButton() {
    Alert.alert('You touched a button :O')
  }
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

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





      /*
      <View style={{padding: 10}}>
        <TextInput
          style={{fontSize: 96, height: 150}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize:72}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#849584"
          />
        </View>
      </View>
      */
      /*
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      </ScrollView>
      */





    );
  }
}

/*
export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
      }}>
        <View style={{width: 80, height:80, backgroundColor: 'powderblue'}} />
        <View style={{height: 80, backgroundColor: 'skyblue'}} />
        <View style={{height:150, backgroundColor: 'steelblue'}} />
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}
*/

/*
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() =>(
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text>{this.props.text}</Text>
    );
  }

}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='BLINKKKKK' />
        <Blink text='BLINKKKKK' />
        <Blink text='BLINKKKKK' />
        <Blink text='BLINKKKKK' />
        <Blink text='BLINKKKKK' />
      </View>
    );
  }
}
*/

/* //Nice Blue Squares
export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
*/

/* //LotsOfGreetings
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='taylor swift' />
        <Greeting name='halsey' />
        <Greeting name='hayley' />
      </View>
    );
  }
}
*/

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
  /*bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },*/
});


// AppRegistry.registerComponent('TicTacToe', () => FlexDirectionBasics);
