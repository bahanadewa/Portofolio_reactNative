import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    DatePickerIOS
} from "react-native";

import {Firebase} from '../../firebase/firebase'
import loginBackground from '../../image/registerBackgorund.jpeg'


class Register extends Component {

    addNewUser = ()=>{
    var db = Firebase.database()
    var dataRegister = db.ref('dataRegister')
    
    var name  = this.name.toLowerCase()
    var email  = this.email
    var username  = this.username.toLowerCase()
    var password  = this.password

    dataRegister.push({
        name,
        email,
        username,
        password
    }).then(()=>{
        console.log("MASUK")
    }).catch((error)=>{
        console.log(error)
    })

    }

    render() {
        return (
            <ImageBackground source={loginBackground} style={styles.container}>
                <SafeAreaView style={styles.SafeAreaView}>
                    <View style={styles.SafeAreaViewView}>
                        <View style={styles.SafeAreaViewViewView}>
                            <TextInput placeholder="NAME" onChangeText={(value)=>this.name = value} style={styles.userAndPassword}/>
                        </View>
                        <View style={styles.SafeAreaViewViewView}>
                            <TextInput placeholder="EMAIL" onChangeText={(value)=>this.email = value} style={styles.userAndPassword}/>
                        </View>
                        <View style={styles.SafeAreaViewViewView}>
                            <TextInput placeholder="USERNAME" onChangeText={(value)=>this.username = value} style={styles.userAndPassword}/>
                        </View>
                        <View style={styles.SafeAreaViewViewView}>
                            <TextInput placeholder="PASSWORD" onChangeText={(value)=>this.password = value} secureTextEntry={true} style={styles.userAndPassword}/>
                        </View>
                        <TouchableOpacity style={styles.TouchableHighlight} onPress={()=>this.addNewUser()}>
                            <Text style={styles.TouchableHighlightText}>REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchableHighlight2} onPress={()=>this.props.navigation.navigate("loginScreen")}>
                            <Text style={styles.TouchableHighlightText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                  
                </SafeAreaView>

            </ImageBackground> 
        );
    }
}
export default Register;

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
        justifyContent: "center",
    },
    SafeAreaViewViewView:{
        alignItems:"center", 
        justifyContent:"center", 
        width:"90%", 
        height:"10%",
        margin: "1%",
        borderRadius : 25,
        backgroundColor : "#f6f6f6",
        opacity : 0.8
    },
    TouchableHighlight:{
        marginTop : "5%",
        alignItems:"center", 
        justifyContent : "center",
        width:"70%", 
        height:"9%",
        margin: "1%",
        borderRadius : 15,
        backgroundColor : "#8C0368",
        opacity : 0.9
    },
    TouchableHighlight2:{
        marginTop : "1%",
        alignItems:"center", 
        justifyContent : "center",
        width:"70%", 
        height:"9%",
        margin: "1%",
        borderRadius : 15,
        backgroundColor : "#F28E13",
        opacity : 0.9
    },
    TouchableHighlightText:{
        position : "absolute",
        color : "white",
        fontFamily:"arial",
        fontWeight : "600",
    },
    userAndPassword :{
        textAlign: 'center',
        margin:"1%",
        width :"100%",
        height : 40,   
    },

    
});