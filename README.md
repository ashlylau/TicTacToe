# TicTacToe
Learning basics of React Native by following this tutorial: https://medium.com/@davidguandev/building-a-tic-tac-toe-in-react-native-2a3c44e697f2

###Heuristics
##### heuristic function (attack):
        X | X | *
        ---------
        O |   | X
        ---------
        O | O |

        AI (X) will select position * to win
    var almostWinAI = this.containsAlmostWin(AIInputs);
    if (almostWinAI[0]) {
      this.setState({ AIInputs: AIInputs.concat(almostWinAI[1]) })
      this.judgeWinner()
      console.log('shouldWin')
      return
    }

##### heuristic function (defense):
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
