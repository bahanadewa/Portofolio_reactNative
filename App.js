import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import {StackContainer} from './component/router/router'
import Mainpage from '../Portofolio_reactNative/component/contain/ProfileMenu/ProfileMenu'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from "react-redux"
import ReduxThunk from 'redux-thunk'
import Reducer from '../Portofolio_reactNative/component/support/actionAndReducer/1.reducer'

const store = createStore(Reducer,{}, applyMiddleware(ReduxThunk))
class componentName extends Component {
  render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
          <StackContainer/>
      </Provider>
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