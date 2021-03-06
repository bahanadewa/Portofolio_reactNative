import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import {Firebase} from '../../firebase/firebase'

class ManageProduct extends Component {

    Add =()=>{
    var db = Firebase.database()
    var masterProduct = db.ref("masterProduct")
    var nameProduct = this.nameProduct.toUpperCase()
    var priceProduct =this.priceProduct
    var description = this.description
    var category =this.category
    var imageProduct =this.imageProduct

        masterProduct.push({
            nameProduct,
            priceProduct,
            description,
            category,
            imageProduct
        }).then(()=>{
            console.log("MASUK")
        }).catch((error)=>{
            console.log(error)
        })
        // var category = this.category
        // alert(category)
    }
   
    render() {
        var data = [
            {value: 'meat'},
            {value: 'chicken'},
            {value: 'pasta'},
            {value: 'seafood'},
            {value: 'beverage'},
            {value: 'dessert'}
        ];
        return (
            <View style={styles.container}>
                <View style={styles.containerView}>
                    <Text style={styles.containerViewText}> Nama Product </Text>
                    <TextInput style={styles.containerViewTextInput} onChangeText={(value)=>this.nameProduct = value} placeholder="Nama Product"/>
                </View>
                <View style={styles.containerView}>
                    <Text style={styles.containerViewText}> Harga </Text>
                    <TextInput style={styles.containerViewTextInput} onChangeText={(value)=>this.priceProduct = value} keyboardType={"numeric"} placeholder="Harga Product"/>
                </View>
                <View style={styles.containerView}>
                    <Text style={styles.containerViewText}> Description </Text>
                    <TextInput style={styles.containerViewTextInput} maxLength={350} onChangeText={(value)=>this.description = value} placeholder="Product Description"/>
                </View>
                <View style={styles.containerView}>
                    <Text style={styles.containerViewText}> Kategory </Text>
                    <View style={{width:"60%"}}>
                        <Dropdown 
                            style={{height:"180%", borderRadius:20, textAlign:"center",backgroundColor :"white", position:"relative", marginTop:"-9%"}}
                            data={data}
                            onChangeText={(value)=>this.category =value}
                            />
                    </View>
                </View>
                <View style={styles.containerView}>
                    <Text style={styles.containerViewText}> Image </Text>
                    <TextInput style={styles.containerViewTextInput} onChangeText={(value)=>this.imageProduct = value} placeholder="Product Image"/>
                </View>
                <View style={styles.View}>
                    <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.Add()}>
                        <Text style={styles.TouchableOpacityText}> ADD </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ManageProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#313B59"
    },
    containerView:{
        flex:1,
        width:"90%",
        alignItems: 'center',
        flexDirection:"row"
    },
    containerViewText:{
        width : "40%",
        fontSize :16,
        fontWeight : "500",
        color: "white"
    },
    containerViewTextInput:{
        width : "60%",
        textAlign:"center",
        height:"40%",
        borderRadius :20,
        backgroundColor:"#f6f6f6"
    },
    View:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"
    },
    TouchableOpacity:{
        alignItems: 'center',
        justifyContent: 'center',
        height:"50%",
        width:"50%",
        backgroundColor :"#F28E13",
        borderRadius :10
    },
    TouchableOpacityText:{
        fontSize :20,
        fontWeight : "500",
        color: "white"
    }
});