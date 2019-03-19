import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MineCommonItem from "./MineCommonItem";
import MineOrderView from "./MineOrderView";
import MineHeadView from "./MineHeadView";

class Mine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <View>
                <MineHeadView/>
                <MineCommonItem leftIcon={require("../../res/images/collect.png")}
                                title={"我的订单"}
                                rightText={"查看全部订单"}/>
                <MineOrderView/>
                <View style={{marginTop: 10}}>
                    <MineCommonItem leftIcon={require("../../res/images/draft.png")}
                                    title={"蛋壳钱包"}
                                    rightText={"账户余额：￥100"}/>
                    <MineCommonItem leftIcon={require("../../res/images/like.png")}
                                    title={"抵用券"}
                                    rightText={"10张"}/>
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonItem leftIcon={require("../../res/images/card.png")}
                                    title={"积分商城"}/>
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonItem leftIcon={require("../../res/images/new_friend.png")}
                                    title={"今日推荐"}
                                    rightIcon={require("../../res/images/me_new.png")}/>
                </View>
                <View style={{marginTop: 10}}>
                    <MineCommonItem leftIcon={require("../../res/images/pay.png")}
                                    title={"我要合作"}
                                    rightText={"轻松开店，招财进宝"}/>
                </View>
            </View>
        );
    }
}

Mine.propTypes = {};

export default Mine;