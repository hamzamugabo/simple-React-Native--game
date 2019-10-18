import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './componets/Headers';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Headers title="Guess a Number"/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center'
  },
});
