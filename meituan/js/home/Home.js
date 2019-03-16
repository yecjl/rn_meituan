import React, {Component} from 'react';
import {View, Text, Image, TextInput, StatusBar, StyleSheet} from 'react-native';
import HomeDetail from "./HomeDetail";

var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get('window');

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    _pressToHomeDetail() {
        console.log("go to HomeDetail");
        var navigator = this.props.navigator;
        if (navigator) {
            navigator.push({
                name: "详情页面",
                component: HomeDetail
            });
        }
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor="rgba(255,96,0,1.0)"/>
                {this.getNavigationBar()}
                <Text onPress={this._pressToHomeDetail.bind(this)}>
                    Home
                </Text>
            </View>
        );
    }

    getNavigationBar() {
        return (
            <View style={styles.navBarStyle}>
                <Text style={styles.locationStyle}>广州</Text>
                <TextInput placeholder="输入商家、品类、商圈" style={styles.txtInputStyle}/>
                <Image source={require("../../res/images/icon_homepage_message.png")} style={styles.imgStyle}/>
                <Image source={require("../../res/images/icon_homepage_scan.png")} style={styles.imgStyle}/>
            </View>
        )
    }
}

Home.propTypes = {};

const styles = StyleSheet.create({
    navBarStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: 60,
        backgroundColor: "rgba(255,96,0,1.0)",
        position: "relative",
        top: -10
    },
    locationStyle: {
        color: 'white'
    },
    txtInputStyle: {
        width: width * 0.7,
        height: 40,
        borderRadius: 16,
        backgroundColor: 'white',
        paddingLeft: 10
    },
    imgStyle: {
        width: 25,
        height: 25
    }
})

export default Home;