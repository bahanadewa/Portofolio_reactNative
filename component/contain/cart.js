import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView
} from "react-native";
import {Firebase} from '../firebase/firebase'
import { TouchableOpacity } from "react-native-gesture-handler";

class Cart extends Component {
    state = {cartList :[], price:[]}
    componentDidMount=()=>{
        var db = Firebase.database()
        var dataCart = db.ref('chartMaster')

        dataCart.on("value", (items)=>{
            this.setState({cartList : Object.values(items.val())})
          }, (err) =>{
              console.log(err)
          })
    }

    listTotalItem=()=>{
            let productPrice = this.state.cartList.map(({ productPrice }) => productPrice)
            let productQty = this.state.cartList.map(({ productQty }) => productQty)
            var total = 0

            for(var i=0;i<productPrice.length;i++){
                total += parseInt(productPrice[i]*productQty[i])
            }

            return(
            <View style={{flexDirection:"row", alignItems:"center", margin:5, height:"100%", width:"100%"}}>
                <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                    <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                        <Text style={{color:"white", fontSize:16}}>{this.state.cartList.length} Packages</Text>
                        <Text style={{color:"white", fontSize:16}}>IDR {total} </Text>
                        <TouchableOpacity style={{backgroundColor:"grey",height:30, borderRadius:5, borderRadius:3, justifyContent:"center", alignItems:"center"}}> 
                            <Text style={{color:"white"}}> Checkout </Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            )
    }

    listView=()=>{
        var jsx = this.state.cartList.map((val)=>{
            return(
            <View style={styles.ViewScrollView}>
                <View style={styles.ViewScrollViewContain}>
                    <View style={{width:"25%",height:"100%" ,justifyContent:"center", alignItems:"center"}}>
                        <Image source={{url:val.productImg}} style={{height:"85%", width:"80%"}}/>
                    </View>
                    <View style={{width:"75%",height:"100%", padding:"2%"}}>
                        <Text style={{fontSize:12, width:"100%",height:"35%"}}>{val.productName}</Text>
                        <Text style={{fontSize:10, width:"100%",height:"20%"}}>IDR {val.productPrice}/Pack</Text>
                        <Text style={{fontSize:10, width:"100%",height:"20%"}}>Qty {val.productQty}</Text>
                        <Text style={{fontSize:12, width:"100%",height:"20%"}}>Total {val.productPrice*val.productQty}</Text>
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
                <View style={styles.detailCart}>
                    {this.listTotalItem()}
                </View>
            </SafeAreaView>
        );
    }
}
export default Cart;

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
        backgroundColor :"#1D3D59",
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