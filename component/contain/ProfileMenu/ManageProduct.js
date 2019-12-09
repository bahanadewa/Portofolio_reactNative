import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ManageProduct extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ManageProduct</Text>
            </View>
        );
    }
}
export default ManageProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});