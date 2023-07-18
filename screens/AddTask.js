import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
//import * as React from "react";
import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time: '',
      setReminders: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Add Task</Text>
        <TextInput
          style={styles.button}
          onChangeText={(text) => this.setState({ title: text })}
          placeholder={'Enter Title'}
        />
        <TextInput
          style={styles.button}
          onChangeText={(text) => this.setState({ time: text })}
          placeholder={'Enter Time'}
        />
        <TouchableOpacity style={styles.button}>Enter</TouchableOpacity>
        onPress={() => this.props.navigation.navigate('TaskBoard')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'extra-bold',
    textAlign: 'top',
    justifyContent: 'top',
  },

  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
});
