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
    ScrollView
} from "react-native";
import {connect} from 'react-redux'
import {onLoginSuccess} from '../../support/actionAndReducer/2.action'
import {Firebase} from '../../firebase/firebase'
import loginBackground from '../../image/loginBackround.jpeg'
import {StackActions,NavigationActions} from 'react-navigation'


class Login extends Component {
    state = {dataUser :[],usernameState:null, passwordState:null}

    componentDidMount(){
        var db = Firebase.database()
        var dataRegister = db.ref('userMaster')

        dataRegister.on("value", (items)=>{
            this.setState({dataUser : items.val()})
          }, (err) =>{
              console.log(err)
          })
    }

    componentDidUpdate(){
        if(this.props.username !== ""){
            const resetAction = StackActions.reset({
                index : 0,
                actions : [ NavigationActions.navigate({routeName : 'mainHome'})]
            })
            this.props.navigation.dispatch(resetAction)
        }
    }

    LoginAuth =()=>{
        var idArray = Object.keys(this.state.dataUser)

        var usernameInput = this.username
        var passwordInput = this.password
        if (usernameInput==undefined && passwordInput==undefined){
            alert("semua harus di isi")
        }else if(usernameInput!="" && passwordInput!=""){
              for (var i= 0 ; i<idArray.length ; i++){
                var dataID = idArray[i]
                var isiDataID = [this.state.dataUser[dataID]]
                for (var j= 0 ; j<isiDataID.length ; j++){
                    var username = isiDataID[j].name
                    var password = isiDataID[j].password
                    var author = isiDataID[j].author
                    var email = isiDataID[j].email
                    if(usernameInput.toLowerCase()==username && passwordInput==password){
                        // this.props.navigation.navigate("mainHome")
                        this.props.onLoginSuccess((username))
                    }  
                }
            } 
        }

        // for (var i= 0 ; i<idArray.length ; i++){
        //     var dataID = idArray[i]
        //     var isiDataID = [this.state.dataUser[dataID]]
        //     for (var j= 0 ; j<isiDataID.length ; j++){
        //         var nama = isiDataID[j].name
        //         var pass = isiDataID[j].password
        //         if(usernameInput==nama && passwordInput==pass){
        //             this.props.navigation.navigate("mainHome")
        //         }  
        //     }
        // }    

        // this.props.navigation.navigate("mainHome")
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

const mapStateToProp = (state)=>{
    return{
       username : state.auth.username,
    }
}
export default connect(mapStateToProp,{onLoginSuccess}) (Login)

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