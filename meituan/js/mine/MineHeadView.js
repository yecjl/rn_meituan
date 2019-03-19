import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get('window');

class MineHeadView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <View style={{backgroundColor: "rgba(255,96,0,1.0)"}}>
                <View style={styles.headTopStyle}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <View style={styles.headIconBorderStyle}><Image source={require("../../res/images/see.png")}
                                                                        style={styles.headIconStyle}/></View>
                        <View style={styles.headTitleStyle}>
                            <Text style={{}}>蛋壳</Text>
                            <Image source={require("../../res/images/avatar_vip.png")} style={styles.headVipStyle}/>
                        </View>
                    </View>
                    <Image source={require("../../res/images/icon_cell_rightarrow.png")} style={styles.imgArrowStyle}/>
                </View>
                <MineHeadInnerView/>
            </View>
        );
    }
}

class MineHeadInnerView extends React.Component {
    render() {
        return (
            <View style={styles.innerViewStyle}>
                {this.renderView()}
            </View>
        );
    }

    renderView() {
        var viewArr = [];
        var valueArr = [{number: 100, name: "美团券"}, {number: 12, name: "评价"}, {number: 50, name: "收藏"}];
        for (let i = 0; i < valueArr.length; i++) {
            viewArr.push(
                <View key={i} style={styles.innerItemStyle}>
                    <Text style={{color: "white"}}>{valueArr[i].number}</Text>
                    <Text style={{color: "white"}}>{valueArr[i].name}</Text>
                </View>
            )

        }
        return viewArr;
    }

}

MineHeadView.propTypes = {};

const styles = StyleSheet.create({
    headTopStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,
        alignItems: "center",
    },
    headIconBorderStyle: {
        width: 45,
        height: 45,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: "rgba(0,0,0,0.1)",
        justifyContent: "center",
        alignItems: "center"
    },
    headIconStyle: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },
    headTitleStyle: {
        flexDirection: "row",
        marginLeft: 10
    },
    headVipStyle: {
        width: 17,
        height: 17,
        marginLeft: 5
    },
    imgArrowStyle: {
        width: 8,
        height: 13
    },
    innerViewStyle: {
        flexDirection: "row",
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',

    },
    innerItemStyle: {
        width: (width / 3) + 1,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: "white",
    }
})

export default MineHeadView;