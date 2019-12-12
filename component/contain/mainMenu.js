import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from "react-native";



//====== IMAGE =======
import Meat from '../image/meat.jpeg'
import Chicken from '../image/chicken.jpeg'
import Dessert from '../image/dessert.jpeg'
import Beverage from '../image/beverage.jpeg'
import Pasta from '../image/pasta.jpeg'
import Seafood from '../image/seafood.jpeg'
import User from '../image/userphoto/bahanaa.png'

class MainMenu extends Component {
    
    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerView1}>
                        <Text style={styles.hearderText}> Hi, BAHANA DEWA </Text>
                    </View>
                    <View style={styles.headerView2}>
                        <TouchableOpacity>
                            <Image source={User} style={styles.headerImage}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.header2}>
                    <View style={styles.view1}>
                        <View style={styles.view11}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate("menuDisplay",{type : "meat"})}>
                                <Image source={Meat} style={styles.imagesetting} />
                                <View style={styles.imagesettingView}></View>
                                {/* <Text style={styles.imagesettingText}> Beef </Text> */}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view12}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate("menuDisplay",{type : "chicken"})}>
                                <Image source={Chicken} style={styles.imagesetting} />
                                <View style={styles.imagesettingView}></View>
                                {/* <Text style={styles.imagesettingText}> Chicken </Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.view2}>
                        <View style={styles.view11}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate("menuDisplay",{type : "pasta"})}>
                                <Image source={Pasta} style={styles.imagesetting}/>
                                <View style={styles.imagesettingView}></View>
                                {/* <Text style={styles.imagesettingText}> Pasta </Text> */}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view12}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate("menuDisplay",{type : "seafood"})}>
                                <Image source={Seafood} style={styles.imagesetting} />
                                <View style={styles.imagesettingView}></View>
                                {/* <Text style={styles.imagesettingText}> Seafood </Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.view3}>
                        <View style={styles.view11}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate("menuDisplay",{type : "beverage"})}>
                                <Image source={Beverage} style={styles.imagesetting} />
                                <View style={styles.imagesettingView}></View>
                                {/* <Text style={styles.imagesettingText}> Beverage </Text> */}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view12}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate("menuDisplay",{type : "dessert"})}>
                                <Image source={Dessert} style={styles.imagesetting} />
                                <View style={styles.imagesettingView}></View>
                                {/* <Text style={styles.imagesettingText}> Desserts </Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
export default MainMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :"#D60846",
    },
    header:{
        flex :1,
        backgroundColor :"#D60846",
        alignItems : "center",
        color : "white",
        flexDirection :"row"
    },
    headerView1:{
        width : "70%"
    },
    headerView2:{
        width : "30%",
        alignItems : "center",
    },
    hearderText:{
        color: "white",
        fontSize : 20,
        fontWeight : "400",
        paddingStart : 20,
    },
    headerImage :{
        width :70,
        height : 70
    },
    header2:{
        flex : 5,
        padding : 5,
        borderTopLeftRadius :15,
        borderTopRightRadius :15,
        backgroundColor :"white",
    },


    // ======= View 1 =========
    view1:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    view11:{
      height :"100%",
      width:"50%",
      alignItems: 'center',
      justifyContent: 'center'
    },
    TouchableOpacity:{
        alignItems: 'center',
        justifyContent: 'center',
        width : "100%",
        height :"100%",
        // shadowColor: 'grey',
        // shadowOffset: { width: 5, height: 5 },
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
    },
    view12:{
      height :"100%",
      width:"50%",
      alignItems: 'center',
      justifyContent: 'center'
    },
    imagesetting:{
        maxWidth : "95%",
        maxHeight : "95%",
        borderRadius : 5,
    },
    imagesettingView:{
        position:"absolute",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#BFBFBF",
        opacity : 0.3,
        height : "96%",
        width : "96%",
        borderRadius : 10
    },
    imagesettingText:{
        fontSize :30,
        color: "#404040",
        position :"absolute",
        fontStyle :"italic"
    },

    // ======= View 2 =========
    view2:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },

     // ======= View 2 =========
     view3:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },

});