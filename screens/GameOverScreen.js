import React from 'react';
import {View, Taxt, StyleSheet, Button} from 'react-native';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number Of Rounds:{props.roundsNumber}</Text>
            <Text>Number Was : {props.userNumber}</Text>

            <Button title="START NEW GAME" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default GameOverScreen;