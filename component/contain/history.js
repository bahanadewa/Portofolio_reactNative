import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Modal
} from "react-native";
import {Firebase} from '../firebase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import {connect} from 'react-redux'
import emptyCart from '../image/empty-cart.png'

class History extends Component {
    state = {cartList :{},modalVisible: false,detailHistory :[]}

    componentDidMount=()=>{
        var db = Firebase.database()
        var dataCart = db.ref('dataCheckout/'+this.props.username)

        dataCart.on("value", (items)=>{
            if(items!=null || items!=undefined || items!=NaN){
                this.setState({cartList :items.val()})
            }else{
                console.log("kosong")
            }
            // this.setState({cartList : Object.values(Object.values(items.val())[0])})
          }, (err) =>{
            console.log(err)
          })
    }

    openModal=(val)=>{
        this.setState({modalVisible:true});
        var db = Firebase.database()
        var detailHistory = db.ref('dataCheckout/'+this.props.username+"/"+val)

        detailHistory.on("value", (items)=>{
            this.setState({detailHistory :Object.values(items.val())[0].item})
          }, (err) =>{
            console.log(err)
          })
        // this.modalData()
    }

    modalData=()=>{
        console.log(this.state.detailHistory)
        var jsx = Object.keys(this.state.detailHistory).map((val)=>{
                return(  
                        <View style={{borderWidth:1, padding:2, margin:2}}>
                            <Text style={styles.textList}> Product : {this.state.detailHistory[val].productName}</Text>
                            <Text style={styles.textList}> Price : {this.state.detailHistory[val].productPrice}</Text>
                            <Text style={styles.textList}> QTY : {this.state.detailHistory[val].productQty}</Text>
                            <Text style={styles.textList}> Total : IDR {this.state.detailHistory[val].productQty*this.state.detailHistory[val].productPrice}</Text>
                        </View>
                )
            })
            return jsx
    }

    closeModal=()=> {
        this.setState({modalVisible:false});
    }


    numberOB=()=>{
        if(this.state.cartList!==null){
            var jsx = Object.keys(this.state.cartList).map((val)=>{
                return(  
                <View style={styles.ViewScrollView}>
                    <TouchableOpacity style={styles.ViewScrollViewContain} onPress={()=>this.openModal(val)}>
                         <Text>{val}</Text>
                    </TouchableOpacity>
                </View>
                )
            })
            return jsx
        }else{
            console.log("dua")
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.History}>
                    <Text style={styles.Tex}> H I S T O R Y </Text>
                </View>
                {this.state.cartList!==null ?
                    <ScrollView style={styles.ScrollView}>
                        {this.numberOB()}
                    </ScrollView>
                    :
                    <View style={{flex:1,width:"100%",justifyContent:"center", alignItems:"center"}}>
                        <Image source={emptyCart} style={{height:"25%", width:"90%"}}/>
                    </View>
                }
                <Modal
                    visible={this.state.modalVisible}
                    animationType={"slide"}
                    onRequestClose={() => this.closeModal()}>
                        <SafeAreaView style={{width:"100%", height:"100%", borderWidth:1}}>
                            <ScrollView style={styles.ScrollView}>
                                {this.modalData()}
                            </ScrollView>
                                <TouchableOpacity onPress={() => this.closeModal()} style={styles.TouchableOpacityModal}>
                                    <Text style={{color:"black", fontSize:16, fontWeight:"800"}}>
                                        BACK
                                    </Text>
                                </TouchableOpacity>          
                        </SafeAreaView>
                </Modal>
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
        height:50,
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
    },
    History:{
        width:"100%",
        height:"10%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5,
        backgroundColor:"#BF4E4E",
        borderBottomLeftRadius:5,
        borderBottomRightRadius :5
    },
    Tex:{
        color:"white",
        fontSize:25,
        fontWeight:"500",
    },
    modalContainer: {
        justifyContent: 'center',
        alignContent:"center",
        opacity : 0.5,
        height:"100%",
        width:"100%"
    },
    TouchableOpacityModal:{
        justifyContent:"center",
        alignItems:"center",
        height:70,
        width: "100%",
        backgroundColor: "#F28E13",
        borderRadius : 10
    },
    textList:{
        fontSize :16,
        fontWeight :"400"
    }
});