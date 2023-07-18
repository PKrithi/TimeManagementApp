import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native';
import Constants from 'expo-constants';
import * as React from "react";

export default class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      time: "",
      setReminders: ""
    };
  }
}

export default class TaskBoard extends Component{
  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Task Board      
      </Text>

      <Text >
        See how many tasks you have set!      
      </Text>

      <Text>
      "You have" + setReminders + "set"
      </Text>
          
           if(time===user.time){
              Alert.alert("Alarm for" + title +"at"+user.time);
              this.setState({ setReminders: -1 });
            }
          
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
    justifyContent: 'top'
  },

  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
});
