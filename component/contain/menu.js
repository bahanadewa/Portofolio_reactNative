import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Modal,
    Button,
    SafeAreaView,
    ImageBackground,
    TextInput
} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import {Firebase} from '../firebase/firebase'
import dataMenu from '../support/data'
import modalBackground from '../image/modalBackground.jpeg'


class Menu extends Component {
    state = {data : dataMenu, type:"",modalVisible: false, name:"", picture:"", price:"", detail:"" }

    
    componentDidMount=()=>{
        const { navigation } = this.props;
        this.setState({type:navigation.getParam('type')})
    }

    openModal=(name, picture, price, detail)=>{
        this.setState({modalVisible:true, name:name, picture:picture, price:price, detail:detail });
        this.modalData()
    }

    modalData=()=>{
            return(
                <View style={styles.innerContainer}>
                    <View style={styles.innerContainerView}>
                        <Image source={{uri : this.state.picture}} style={{width:"90%", height:"50%",borderRadius:20}}/>
                        <View style={styles.modalView}>
                            <View style={{height:"85%",width:"95%"}}>
                                <Text style={{fontSize:22, marginBottom:"4%", fontWeight:"600"}}>{this.state.name}</Text> 
                                <Text style={{fontSize:19,marginBottom:"4%"}}>IDR {this.state.price}</Text> 
                                <Text style={{fontSize:16, marginBottom:"2%",fontWeight:"bold",textAlign:"center", textDecorationLine:"underline"}}> Description </Text> 
                                <Text style={{fontSize:16, textAlign:"justify", maxHeight:"45%"}}>{this.state.detail}</Text> 
                            </View>
                            <View style={{height:"15%", width:"100%", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                                <TextInput placeholder="QTY"  onChangeText={(value)=>this.qty = value} keyboardType={"number-pad","numbers-and-punctuation"}  placeholderTextColor="black" maxLength={3} style={{width:"30%",height:"80%",borderRadius:5 ,textAlign:"center", backgroundColor:"grey", margin:2}}/>
                                <TouchableOpacity style={{width:"30%",height:"80%" ,borderRadius:5, justifyContent:"center", alignItems:"center", margin:2, backgroundColor:"#F28E13"}}
                                    onPress={() => this.addProduct(
                                        this.state.picture,
                                        this.state.name,
                                        this.state.price,
                                        this.qty
                                    )}>
                                    <Text style={{color:"white", fontWeight:"600"}}>BUY</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <View style={styles.TouchableOpacityModalView}>
                        <TouchableOpacity onPress={() => this.closeModal()} style={styles.TouchableOpacityModal}>
                            <Text style={{color:"white", fontSize:16, fontWeight:"800"}}>
                                BACK
                            </Text>
                        </TouchableOpacity>          
                    </View>
                </View>
        )
    }
        
    closeModal=()=> {
    this.setState({modalVisible:false});
    }

    itemContain = ()=>{
        return(
            <FlatGrid
            items={this.state.data.filter((val)=>{
                return (val.type.toLowerCase().startsWith(this.state.type)) 
            })}
            style={styles.gridView}
            renderItem={({item, index }) => (
              <View style={styles.viewFlatGrid}>
                    <View style={{width:"100%",alignItems:"center"}}>
                            <Image source={{uri : item.picture}} style={{width:150, height:160}}/>
                        <View style={{width:"100%", height:50, justifyContent:"center", padding:10}}>
                            <Text style={styles.viewContainViewText1}>{item.name}</Text>
                            <Text style={styles.viewContainViewText2}>IDR {item.idr}</Text>
                        </View>
                    </View>
                    <View style={{width:"100%",height:25,justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity style={styles.TouchableOpacity} 
                                onPress={() => this.openModal(
                                    name=item.name,
                                    picture=item.picture,
                                    price = item.idr,
                                    detail = item.detail
                                    )}> 
                                    <Text style={styles.TouchableOpacityText}> Add To Cart </Text>
                        </TouchableOpacity>
                    </View>
              </View>
            )}/>
        )

    }

    addProduct = (productImg,productName,productPrice,productQty)=>{
        var db = Firebase.database()
        var dataCart = db.ref("chartMaster")

    
        dataCart.push({
            productImg,
            productName,
            productPrice,
            productQty
        }).then(()=>{
            console.log("MASUK")
        }).catch((error)=>{
            console.log(error)
        })
    
        }



    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{maxHeight:"100%", width:"100%"}}>
                        {this.itemContain()}
                        <Modal
                            visible={this.state.modalVisible}
                            animationType={"slide"}
                            onRequestClose={() => this.closeModal()}>
                                <ImageBackground source={modalBackground} style={styles.modalContainer}>
                                    {this.modalData()}
                                </ImageBackground>   
                        </Modal>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridView: {
        height :"100%"
    },
    viewFlatGrid:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 2,
        borderWidth :1,
        borderRadius : 2,
        borderColor : "#BFBFBF",
    },
    viewContainViewText1:{
        fontWeight:"bold", 
        fontSize:12,
        width: "100%",
    },
    viewContainViewText2:{
        fontSize:13
    },
    TouchableOpacity:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#F29F05",
        borderRadius : 6,
        width : "60%",
        height : "90%"
    },
    TouchableOpacityText:{
        color : "#A63005",
        fontWeight : "400"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        height:"90%"
    },
    TouchableOpacityModalView:{
        height :"10%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    innerContainerView:{
        alignItems:"center",
        height:"90%",
        width:"100%",
    },
    TouchableOpacityModal:{
        justifyContent:"center",
        alignItems:"center",
        height:"60%",
        width: "70%",
        backgroundColor: "#F28E13",
        borderRadius : 10
    },
    modalView:{
        alignItems:"center", 
        width:"90%",
        height :"45%",
        top :"4%",
        padding : "2%",
        backgroundColor :"white",
        opacity : 0.7,
        borderRadius:20
    }
});
