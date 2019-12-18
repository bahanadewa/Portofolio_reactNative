import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    Alert
} from "react-native";
import {Firebase} from '../firebase/firebase'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import {connect} from 'react-redux'
import emptyCart from '../image/empty-cart.png'

class Cart extends Component {
    state = {cartList :[], price:[]}
    componentDidMount=()=>{
        var db = Firebase.database()
        var dataCart = db.ref('chartMaster/'+this.props.username)

        dataCart.on("value", (items)=>{
            if((items!=null || items!=undefined)){
                this.setState({cartList : (items.val())})
            }else{
                console.log("kosong")
            }
            // console.log(Object.values(items.val())[0].productImg)
          }, (err) =>{
            console.log(err)
          })
    }


    listTotalItem=()=>{
            if(this.state.cartList!==null){
                let productPrice = Object.values(this.state.cartList).map(({ productPrice }) => productPrice)
                let productQty = Object.values(this.state.cartList).map(({ productQty }) => productQty)
                var total = 0

                for(var i=0;i<productPrice.length;i++){
                    total += parseInt(productPrice[i]*productQty[i])
                }

                return(
                <View style={{flexDirection:"row", alignItems:"center", margin:5, height:"100%", width:"100%"}}>
                    <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                        <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                            <Text style={{color:"white", fontSize:16}}>{Object.values(this.state.cartList).length} Packages</Text>
                            <Text style={{color:"white", fontSize:16}}>IDR {total} </Text>
                            <TouchableOpacity  onPress={
                                    ()=>this.checkout((this.state.cartList))
                                        }style={{backgroundColor:"#8C2E2E",height:30, borderRadius:5, borderRadius:3, justifyContent:"center", alignItems:"center"}}> 
                                <Text style={{color:"white", fontWeight:"600"}}> Checkout </Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                )
            }
    }

    checkout=(item)=>{
        var db = Firebase.database()
        var dataCheckout = db.ref("dataCheckout/"+this.props.username)
        dataCheckout.push({
            item
        }).then(()=>{
            db.ref('chartMaster/'+this.props.username).remove()
            console.log("MASUK")
        }).catch((error)=>{
            console.log(error)
        })
    }


    deleteItem=(id)=>{
        var db = Firebase.database()
        var dataCart = db.ref('chartMaster/'+this.props.username)
        Alert.alert("Delete this item",
        ("are you sure ?"),
        [{text : "Yes ", onPress : ()=> dataCart.child(id).remove()},
        { text : " Cancel"}])
    }

    listView=()=>{
        if(this.state.cartList!==null){
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
                                        <TouchableOpacity onPress={()=>this.deleteItem(val)} >
                                            <Icon name="trash" size={30} color="#8C2E2E"/>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </View>
                </View>
                )
            })
            return jsx
        }else{
            return(
                <View style={{height:"600%",width:"100%",justifyContent:"center", alignItems:"center"}}>
                    <Image source={emptyCart} style={{height:100, width:200}}/>
                </View>
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.ScrollView}>
                    {this.listView()}
                </ScrollView>
                <View style={styles.detailCart}>
                        {this.listTotalItem()}
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProp = (state)=>{
    return{
       username : state.auth.username,
    }
}
export default connect(mapStateToProp) (Cart)
// export default Cart;

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