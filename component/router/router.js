import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

// ============= MAIN MENU ====================
import MainPage from '../contain/mainMenu'
import Cart from '../contain/cart'
import Order from '../contain/order'
// ============= MENU ====================

import MenuDisplay from '../contain/menu'


const Menu = createStackNavigator({
    menu : MainPage,
    menuDisplay : MenuDisplay
})

const MainHome = createMaterialBottomTabNavigator({
    HOME : {
            screen :Menu,
            navigationOptions : {
                  tabBarIcon: () =><Icon name="home" size={20} color="#BFBFBF"/>,
              },
             
            },
    CART : {
            screen :Cart,
            navigationOptions : {
                  tabBarIcon: () =><Icon name="shopping-cart" size={20} color="#BFBFBF"/>
              }
            },
    ORDER : {
      screen :Order,
      navigationOptions : {
          tabBarIcon: () =><Icon name="shopping-bag" size={20} color="#BFBFBF"/>,
        },
      },
},{
  initialRouteName : "HOME",
  barStyle :{backgroundColor: '#FFFFFF'},
  inactiveColor : "#BFBFBF",
  activeColorLight : "#404040",
  
});



const AppNavigator = createStackNavigator({
    mainHome : MainHome
   },{
     initialRouteName : "mainHome",
     headerMode : 'none'
   });
 
 export const StackContainer = createAppContainer(AppNavigator);