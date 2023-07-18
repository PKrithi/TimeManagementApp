import { Text, View, StyleSheet, TouchableOpacity, Alarm } from 'react-native';
import Constants from 'expo-constants';
import * as React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Time Management App</Text>
      <TouchableOpacity>
        style={[styles.button, { marginTop: 20 }]}
        <Text style={styles.button}>Task Board</Text>
      </TouchableOpacity>
      onPress={() => this.props.navigation.navigate('TaskBoard')}
      <TouchableOpacity>
        style={[styles.button]}
        <Text style={styles.button}>Add Task</Text>
      </TouchableOpacity>
      onPress={() => this.props.navigation.navigate('AddTask')}
    </View>
  );
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
    textAlign: 'center',
    justifyContent: '',
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
