import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from "react-native";

import loginBackground from '../../image/loginBackround.jpeg'


class Login extends Component {

    LoginAuth =()=>{
        var username = this.username
        var password = this.password 

        if (username==undefined && password==undefined){
            // alert ("username dan password tidak boleh kosong")
            this.props.navigation.navigate("mainHome")
        }else if (username.toLocaleLowerCase() == "admin" && password.toLocaleLowerCase()== "admin"){
            this.props.navigation.navigate("mainHome")
        }else if(username!="admin" && password!="admin") {
            // alert ("Username or Password is Incorrect")
            this.props.navigation.navigate("mainHome")
        }
    }

    render() {
        return (
            <ImageBackground source={loginBackground} style={styles.container}>
                <SafeAreaView style={styles.SafeAreaView}>
                    <View style={styles.SafeAreaViewView}>
                        <View style={styles.SafeAreaViewViewView}>
                            <TextInput placeholder="USERNAME" onChangeText={(value)=>this.username = value} style={styles.userAndPassword}/>
                        </View>
                        <View style={styles.SafeAreaViewViewView}>
                            <TextInput placeholder="PASSWORD" onChangeText={(value)=>this.password = value} secureTextEntry={true} style={styles.userAndPassword}/>
                        </View>
                        <TouchableOpacity style={styles.TouchableHighlight} onPress={()=>this.LoginAuth()}>
                            <Text style={styles.TouchableHighlightText} >LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchableHighlight2} onPress={()=>this.props.navigation.navigate("registerScreen")}>
                            <Text style={styles.TouchableHighlightText} >REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                  
                </SafeAreaView>

            </ImageBackground> 
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:"100%",
        height:"100%"
    },
    SafeAreaView:{
        width:"100%", 
        height :"100%",
        alignItems: 'center',
        justifyContent:"center"
    },
    SafeAreaViewView:{
        width:"100%", 
        height :"70%",
        alignItems: 'center',
        justifyContent:"center"
    },
    SafeAreaViewViewView:{
        alignItems:"center", 
        justifyContent:"center", 
        width:"90%", 
        height:"10%",
        margin: "1%",
        borderRadius : 25,
        backgroundColor : "#f6f6f6",
        opacity : 0.9
    },
    TouchableHighlight:{
        marginTop : "5%",
        alignItems:"center", 
        justifyContent:"center", 
        width:"70%", 
        height:"9%",
        margin: "1%",
        borderRadius : 15,
        backgroundColor : "#F28E13",
        opacity : 0.9
    },
    TouchableHighlight2:{
        marginTop : "1%",
        alignItems:"center", 
        justifyContent:"center", 
        width:"70%", 
        height:"9%",
        margin: "1%",
        borderRadius : 15,
        backgroundColor : "#8C0368",
        opacity : 0.9
    },
    TouchableHighlightText:{
        color : "white",
        fontFamily:"arial",
        fontWeight : "600",
        marginTop :"2%"
    },
    userAndPassword :{
        textAlign: 'center',
        margin:"1%",
        width :"100%",
        height : 40,   
    },

    
});