
import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

const inicialState = {
  displayValue = '0',
  clearDisplay = false,
  operation: null,
  values: [0, 0],
  current: 0,
}

// const App = (props) => {
export default class App extends Component {

  state = { ...initialState }

  // addDigit = n => {
  //   this.setState({ displayValue: n })
  // }

  // clearMemory = () => {
  //   this.setState({ displayValue: '0' })
  // }

  // setOperation = operacao => {

  // }

  render() {
    return (
      <View style={styles.conteiner}>
        <Display value = {this.state.displayValue} />
        <View style={styles.buttons}>
          {/* <Button label = 'AC' onClick={this.clearMemory}/>
          <Button label = '/' operation onClick={() => this.setOperation('/') } /> */}
          <Button label = '7'/>
          <Button label = '8'/>
          <Button label = '9'/>
          <Button label = '*'/>
          <Button label = '4'/>
          <Button label = '5'/>
          <Button label = '6'/>
          <Button label = '-'/>
          <Button label = '1'/>
          <Button label = '2'/>
          <Button label = '3'/>
          <Button label = '+'/>
          <Button label = '0'/>
          <Button label = '.'/>
          <Button label = '0'/>
          <Button label = '='/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
});

// export default App;
