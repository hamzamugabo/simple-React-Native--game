import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './componets/Headers';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) =>  {
    setUserNumber(selectedNumber);
    
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

if(userNumber && guessRounds<=0){
  content = <GameScreen userChioce={userNumber} onGameOver={gameOverHandler}/>;
}
else if(guessRounds>0){
  content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={newGameHandler}/>
};


  return (
    <View style={styles.screen}>
      <Headers title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center'
  },
});
