import React, { Component } from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
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
import LoginScreen from '../contain/LoginAndRegister/login'
import RegisterScreen from '../contain/LoginAndRegister/register'


// ============= PROFILE ====================
import ProfileMenu from '../contain/ProfileMenu/ProfileMenu'
import EditProfile from '../contain/ProfileMenu/EditProfile'
import ManageProduct from '../contain/ProfileMenu/ManageProduct'





const Profile = createStackNavigator({
      profileDisplay : ProfileMenu,
      editProfileDisplay : EditProfile,
      manageProductDisplay : ManageProduct
},{
  headerMode : 'none'
})

const CartMenu = createStackNavigator({
    cartDisplay : Cart
},{
  headerMode : 'none'
})

const OrderMenu = createStackNavigator({
  orderDisplay : Order
})


const Menu = createStackNavigator({
    menu :{
        screen: MainPage,
        navigationOptions:{
          headerShown : false
        }
      },
    menuDisplay : MenuDisplay,
    menuProfile : Profile
})

const MainHome = createMaterialBottomTabNavigator({
    HOME : {
            screen :Menu,
            navigationOptions : {
                  tabBarIcon: () =><Icon name="home" size={20} color="#BFBFBF"/>,
              },
             
            },
    CART : {
            screen :CartMenu,
            navigationOptions : {
                  tabBarIcon: () =><Icon name="shopping-cart" size={20} color="#BFBFBF"/>
              }
            },
    HISTORY : {
      screen :OrderMenu,
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
    mainHome : MainHome,
    loginScreen : LoginScreen,
    registerScreen : RegisterScreen
   },{
     initialRouteName : "loginScreen",
     headerMode : 'none'
   });
 
 export const StackContainer = createAppContainer(AppNavigator);