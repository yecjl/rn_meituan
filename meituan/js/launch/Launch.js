import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet} from 'react-native';
import Main from "../main/Main";

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

class Launch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

    }

    componentDidMount(): void {
        setTimeout(()=> {
            let navigator = this.props.navigator;
            navigator.replace({
                name: "首页",
                component: Main
            });
        }, 100);
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true}/>
                <Image style={styles.imgStyle} source={require("../../res/images/luancher.png")}/>
            </View>
        );
    }
}

Launch.propTypes = {};

const styles = StyleSheet.create({
    imgStyle: {
        width: width,
        height: height,
        resizeMode: "cover"
    }
})

export default Launch;