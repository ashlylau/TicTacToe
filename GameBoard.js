import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View
} from 'react-native'

import Circle from './Circle'
import Cross from './Cross'
import {
  CENTER_POINTS,
  AREAS,
  CONDITIONS,
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE
} from './Constants'
import styles from './GameBoardStyle'
import PromptArea from './PromptArea'

export default class GameBoard extends Component {
  state: {
    AIInputs: number[],
    userInputs: number[],
    result: number,
    round: number
  };

  constructor() {
    super()
    this.state={
      AIInputs: [],
      userInputs: [],
      result: GAME_RESULT_NO,
      round: 0
    }
  }

  restart() {
    const {round} = this.state
    this.setState({
      userInputs: [],
      AIInputs: [],
      result: GAME_RESULT_NO,
      round: round + 1
    })
    setTimeout(() => {
      if (round % 2 === 0) { //determines when AI should play
        this.AIAction()
      }
    }, 5)
  }

  boardClickHandler(e: Object) {
    const {locationX, locationY} = e.nativeEvent
    const {userInputs, AIInputs, result} = this.state
    if (result !== -1) {
      return
    }
    const inputs = userInputs.concat(AIInputs)

    const area = AREAS.find(d => //find the area that this location corresponds to
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY))

      if (area && inputs.every(d => d !== area.id)) { //area not pressed before, add to inputs
        this.setState({ userInputs : userInputs.concat(area.id) })
        setTimeout(() => {
          this.judgeWinner()
          this.AIAction()
        }, 5)
      }
  }

  AIAction() {
    const {userInputs, AIInputs, result, round} = this.state
    if (result !== -1) {
      return
    }

    /* implement heuristic function (attack):
        X | X | *
        ---------
        O |   | X
        ---------
        O | O |

        AI (X) will select position * to win */
    var almostWinAI = this.containsAlmostWin(AIInputs);
    if (almostWinAI[0]) {
      this.setState({ AIInputs: AIInputs.concat(almostWinAI[1]) })
      this.judgeWinner()
      console.log('shouldWin')
      return
    }

    /* implement heuristic function (defense):
        X |   |
        ---------
        O |   | X
        ---------
        O | O | *

        AI (X) will select position * to prevent human from winning */
    var almostWinUser = this.containsAlmostWin(userInputs);
    if (almostWinUser[0]) {
      this.setState({ AIInputs: AIInputs.concat(almostWinUser[1]) })
      this.judgeWinner()
      console.log('blockedAlmostWinUser')
      return
    }

    while (true) {
      const inputs = userInputs.concat(AIInputs)

      const randomNumber = Math.round(Math.random() * 8.3)
      if (inputs.every(d => d !== randomNumber)) { //if curr inputs != selected area
        this.setState({ AIInputs: AIInputs.concat(randomNumber) })
        this.judgeWinner()
        break
      }
    }
  }

  //returns [boolean, value]
  containsAlmostWin(inputs: number[]) {
    const {userInputs, AIInputs} = this.state
    var allInputs = userInputs.concat(AIInputs)

    for (var i = 0; i < CONDITIONS.length; i++) {
      var result = this.containsTwo(inputs, CONDITIONS[i]);
      if (result != 10 && allInputs.every(d => d !== result)) {
        return [true, result];
      }
    }
    return [false, 10];
  }

  //returns required position to win an almost win
  containsTwo(inputs: number[], condition: number[]) {
    if (inputs.includes(condition[0]) && inputs.includes(condition[1])) {
      return condition[2];
    }
    if (inputs.includes(condition[1]) && inputs.includes(condition[2])) {
      return condition[0];
    }
    if (inputs.includes(condition[0]) && inputs.includes(condition[2])) {
      return condition[1];
    }
    return 10;
  }

  componentDidMount() {
    this.restart()
  }

  isWinner(inputs: number[]) {
    return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1))
  }

  judgeWinner() {
    const {userInputs, AIInputs, result} = this.state
    const inputs = userInputs.concat(AIInputs)

    if (inputs.length >= 5) {
      let res = this.isWinner(userInputs)
      if (res && result !== GAME_RESULT_USER) {
        return this.setState({ result: GAME_RESULT_USER})
      }
      res = this.isWinner(AIInputs)
      if (res && result !== GAME_RESULT_AI) {
        return this.setState({ result: GAME_RESULT_AI})
      }
    }

    if (inputs.length === 9 &&
        result === GAME_RESULT_NO && result !== GAME_RESULT_TIE) {
      this.setState({ result: GAME_RESULT_TIE})
    }
  }

  render() {
    const {userInputs, AIInputs, result} = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
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
            {
              userInputs.map((d, i) => (
                <Circle
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                  color='deepskyblue'
                />
              ))
            }
            {
              AIInputs.map((d, i) => (
                <Cross
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                />
              ))
            }
          </View>
        </TouchableWithoutFeedback>
        <PromptArea result={result} onRestart={() => this.restart()} />
      </View>
    )
  }
}
