import React, {Component} from 'react';
import {View, Text, StatusBar, Image, ScrollView, StyleSheet} from 'react-native';
import MoreCommonItem from "./MoreCommonItem";

class More extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor="rgba(255,96,0,1.0)" barStyle={"light-content"}/>
                <View style={styles.navBarStyle}>
                    <Text style={{color: "white"}}>更多</Text>
                    <Image source={require("../../res/images/icon_mine_setting.png")} style={styles.setImgStyle}/>
                </View>
                {this.getScrollView()}
            </View>
        );
    }

    getScrollView() {
        return (
            <ScrollView>
                <View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonItem title={"扫一扫"}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonItem title={"省流量模式"} isSwitch={true}/>
                        <MoreCommonItem title={"消息提醒"}/>
                        <MoreCommonItem title={"邀请好友使用码团"}/>
                        <MoreCommonItem title="清空缓存" rightText="1.99M"/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonItem title="意见反馈"/>
                        <MoreCommonItem title="问卷调查"/>
                        <MoreCommonItem title="支付帮助"/>
                        <MoreCommonItem title="网络诊断"/>
                        <MoreCommonItem title="我要应聘"/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonItem title="精品应用"/>
                    </View>
                </View>
            </ScrollView>
        );
    }


}

More.propTypes = {};

const styles = StyleSheet.create({
    navBarStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,96,0,1.0)",
        height: 50
    },
    setImgStyle: {
        width: 25,
        height: 25,
        position: "absolute",
        right: 10
    }
});

export default More;