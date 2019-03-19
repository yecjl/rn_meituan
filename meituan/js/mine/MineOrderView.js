import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class MineOrderView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <View style={styles.orderViewStyle}>
                {this.renderOrderView()}
            </View>
        );
    }

    renderOrderView() {
        var viewArr = [];
        var valueArr = [{
            img: require("../../res/images/order1.png"), title: "待付款"
        },
            {img: require("../../res/images/order2.png"), title: "待使用"},
            {img: require("../../res/images/order3.png"), title: "待评价"},
            {img: require("../../res/images/order4.png"), title: "退款/售后"}];
        for (let i = 0; i < valueArr.length; i++) {
            viewArr.push(
                <View key={i} style={styles.itemStyle}>
                    <Image source={valueArr[i].img} style={styles.imgStyle}/>
                    <Text>{valueArr[i].title}</Text>
                </View>
            );
        }
        return viewArr;
    }
}

MineOrderView.propTypes = {};

const styles = StyleSheet.create({
    orderViewStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dddddd"
    },
    itemStyle: {
        justifyContent: "center",
        alignItems: "center"
    },
    imgStyle: {
        width: 30,
        height: 20
    }
})

export default MineOrderView;