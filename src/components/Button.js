import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export default props => {
// const Button = (props) => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.button)
    if (props.operation) stylesButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress ={props.onClick}>
            <Text style={stylesButton}>{ props.label }</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#fadee1',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#f09ca5',
    },
    operationButton: {
        color: 'white',
        backgroundColor: '#e1fade',
    },
    ButtonDouble: {
        width: (Dimensions.get(window).width/4) * 2,
    }
})

// export default Button;