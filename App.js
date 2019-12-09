import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";

import {StackContainer} from './component/router/router'
import Mainpage from '../my_project/component/contain/ProfileMenu/ProfileMenu'

class componentName extends Component {
  render() {
    console.disableYellowBox = true
    return (
        <StackContainer/>
    );
  }
}
export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});