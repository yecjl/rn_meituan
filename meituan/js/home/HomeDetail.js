import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from "./Home";

class HomeDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    _pressToHome() {
        console.log("go to Home");
        var {navigator} = this.props;
        if (navigator) {
            navigator.pop({
                name: "首页",
                component: Home
            })
        }
    }

    render() {
        return (
            <View style={styles.homeDetail}>
                <Text onPress={this._pressToHome.bind(this)}>
                    HomeDetail
                </Text>
            </View>
        );
    }
}

HomeDetail.propTypes = {};

const styles = StyleSheet.create({
    homeDetail: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeDetail;