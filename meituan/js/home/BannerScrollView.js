import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import BannerListView from "./BannerListView";

var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get("window");

class BannerScrollView extends React.Component {
    constructor(props) {
        super(props);

        const data = [
            [
                {"title": "美食", "image": require('../../res/images/ms.png')},
                {"title": "电影", "image": require('../../res/images/dy.png')},
                {"title": "酒店", "image": require('../../res/images/jd.png')},
                {"title": "休闲娱乐", "image": require('../../res/images/xxyl.png')},
                {"title": "外卖", "image": require('../../res/images/wm.png')},
                {"title": "自助餐", "image": require('../../res/images/zzc.png')},
                {"title": "KTV", "image": require('../../res/images/ktv.png')},
                {"title": "火车票机票", "image": require('../../res/images/hcpjp.png')},
                {"title": "丽人", "image": require('../../res/images/lr.png')},
                {"title": "周边游", "image": require('../../res/images/zby.png')}
            ],
            [
                {"title": "足疗按摩", "image": require('../../res/images/zlam.png')},
                {"title": "购物", "image": require('../../res/images/gw.png')},
                {"title": "今日新单", "image": require('../../res/images/jrxd.png')},
                {"title": "小吃快餐", "image": require('../../res/images/xckc.png')},
                {"title": "生活服务", "image": require('../../res/images/shfw.png')},
                {"title": "甜点饮品", "image": require('../../res/images/tdyp.png')},
                {"title": "美甲", "image": require('../../res/images/mj.png')},
                {"title": "景点门票", "image": require('../../res/images/jdmp.png')},
                {"title": "旅游", "image": require('../../res/images/ly.png')},
                {"title": "全部分类", "image": require('../../res/images/qbfl.png')}
            ]
        ];

        this.state = {
            data,
            position: 0
        };

    }

    render() {
        return (
            <View style={styles.containerViewStyle}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=> {
                        var position = e.nativeEvent.contentOffset.x / width;
                        console.log("position: " + position);
                        this.setState({
                            position
                        })
                    }}>
                    {this.renderListView()}
                </ScrollView>
                <View style={styles.indicatorStyle}>
                    {this.renderIndicatorView()}
                </View>
            </View>
        );
    }

    renderListView() {
        var viewArr = [];
        for (let i = 0; i < this.state.data.length; i++) {
            viewArr.push(<BannerListView key={i} dataArr={this.state.data[i]}/>);
        }
        return viewArr;
    }

    renderIndicatorView() {
        var viewArr = [];
        for (let i = 0; i < this.state.data.length; i++) {
            var style = this.state.position == i ? {color: "red"} : {color: "grey"};
            viewArr.push(<Text key={i} style={[styles.bullItemStyle, style]}>&bull;</Text>);
        }
        return viewArr;
    }
}

BannerScrollView.propTypes = {};

const styles = StyleSheet.create({
    containerViewStyle: {
        backgroundColor: "white"
    },
    indicatorStyle: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    bullItemStyle: {
        color: "grey",
        fontSize: 25
    }
})

export default BannerScrollView;