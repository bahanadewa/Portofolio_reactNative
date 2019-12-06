import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import dataMenu from '../support/data'


class Menu extends Component {
    state = {data : dataMenu, type:"" }

    componentDidMount=()=>{
        const { navigation } = this.props;
        this.setState({type:navigation.getParam('type')})
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
                        <TouchableOpacity style={styles.TouchableOpacity}> 
                                    <Text style={styles.TouchableOpacityText}> Add To Cart </Text>
                        </TouchableOpacity>
                    </View>
              </View>
            )}/>
        )

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{maxHeight:"100%", width:"100%"}}>
                        {this.itemContain()}
                </ScrollView>
            </View>
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
    }
});