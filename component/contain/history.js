import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    Alert,
    TouchableOpacity
} from "react-native";
import {Firebase} from '../firebase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import {connect} from 'react-redux'

class History extends Component {
    state = {cartList :{}, price:[]}

    componentDidMount=()=>{
        var db = Firebase.database()
        var dataCart = db.ref('dataCheckout/'+this.props.username)

        dataCart.on("value", (items)=>{
            // this.setState({cartList : Object.values(Object.values(items.val())[0])})
            console.log((Object.values(items.val())[0]))
          }, (err) =>{
            console.log(err)
          })
    }

    listView=()=>{
            var jsx = Object.keys(this.state.cartList).map((val)=>{
                return(  
                <View style={styles.ViewScrollView}>
                    <View style={styles.ViewScrollViewContain}>
                        <View style={{width:"25%",height:"100%" ,justifyContent:"center", alignItems:"center"}}>
                            <Image source={{url: this.state.cartList[val].productImg}} style={{height:"85%", width:"80%"}}/>
                        </View>
                        <View style={{width:"75%",height:"100%"}}>
                                <Text style={{fontSize:12, width:"100%",height:"35%", padding:2, fontWeight:"600"}}>{this.state.cartList[val].productName}</Text>
                                <View style={{width:"100%",height:"65%", flexDirection:"row"}}>
                                    <View style={{width:"70%",justifyContent:"center"}}>
                                        <Text style={{fontSize:11, width:"100%",height:"30%"}}>IDR {this.state.cartList[val].productPrice}/Pack</Text>
                                        <Text style={{fontSize:11, width:"100%",height:"30%"}}>Qty {this.state.cartList[val].productQty}</Text>
                                        <Text style={{fontSize:12, width:"100%",height:"30%"}}>Total {this.state.cartList[val].productPrice*this.state.cartList[val].productQty}</Text>
                                    </View>
                                    <View style={{width:"30%",justifyContent:"center", alignItems:"center"}}>
                                        <TouchableOpacity >
                                            <Icon name="info-circle" size={30} color="black"/>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </View>
                </View>
                )
            })
            return jsx
        }




    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.ScrollView}>
                    {this.listView()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProp = (state)=>{
    return{
       username : state.auth.username,
    }
}
export default connect(mapStateToProp) (History)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    ScrollView:{
       flex:1,
        width:"100%"
    },
    detailCart:{
        height:"15%",
        width:"100%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor :"#BF4E4E",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
    },
    ViewScrollView:{
        width:"100%",
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:5,
        paddingLeft:5,
        paddingBottom:5,
    },
    ViewScrollViewContain:{
        borderWidth:1,
        width:"100%",
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        borderRadius:3,
        borderColor : "gray",
    }

});