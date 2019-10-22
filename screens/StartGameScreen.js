import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardTypeAndroid
} from "react-native";
import Colors from "../constants/colors";
import Input from "../componets/Input";
import Card from "../componets/Card";
import NumberContainer from "../componets/NumberContainer";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "The input number should be between 1-99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmOutPut;
  if (confirmed) {
    confirmOutPut = (
      <Card style={styles.summaryContainer}>
        <Text> You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View styles={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <View style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.blue}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.green}
              />
            </View>
          </View>
        </View>
        {confirmOutPut}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  button: {
    width: 90
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "auto"
  }
});

export default StartGameScreen;
