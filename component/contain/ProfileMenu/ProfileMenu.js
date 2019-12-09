import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Image
} from "react-native";

import ProfileMenuPicture from '../../image/profileMenu.jpeg'
import ProfileImageMan from '../../image/icon/man.png'
import ProfileImageStorage from '../../image/icon/storage.png'

class ProfileMenu extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={ProfileMenuPicture} style={styles.ImageBackground}>
                    <View style={styles.ImageBackgroundView}>
                        <View style={styles.ImageBackgroundViewContain}>
                            <TouchableOpacity style={styles.TouchableOpacity1}>
                                <Image source={ProfileImageMan} style={styles.TouchableOpacity1Image} />
                                <Text style={styles.Text}>EDIT PROFILE </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ImageBackgroundViewContain}>
                            <TouchableOpacity style={styles.TouchableOpacity2}>
                                <Image source={ProfileImageStorage} style={styles.TouchableOpacity1Image} />
                                <Text style={styles.Text}>MANAGE PRODUCT </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
export default ProfileMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageBackground:{
        width:"100%",
        height: "100%",
        alignItems: 'center',
    },
    ImageBackgroundView:{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:"white",
        width:"80%",
        height:"60%",
    },
    ImageBackgroundViewContain:{
        flex :1,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    TouchableOpacity1:{
        height: "70%",
        width:"80%",
        borderRadius : 10,
        backgroundColor :"#8D414D",
        alignItems: 'center',
        justifyContent: 'center',
    },
    TouchableOpacity1Image:{
        height: "58%",
        width:"37%",
       
    },
    TouchableOpacity2:{
        height: "70%",
        width:"80%",
        borderRadius : 10,
        backgroundColor :"#A84409",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text:{
        color :"white",
        marginTop : "5%",
        fontWeight : "600"
    }
});