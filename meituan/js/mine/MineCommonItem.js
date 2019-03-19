import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class MineCommonItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    static defaultProps = {
        leftIcon: undefined,
        title: "",
        rightText: undefined,
        rightIcon: undefined
    }

    render() {
        return (
            <View style={styles.commonItemStyle}>
                <View style={styles.partViewStyle}>
                    <Image source={this.props.leftIcon} style={styles.imgLeftStyle}/>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.partViewStyle}>
                    {this.renderRightView()}
                    <Image source={require("../../res/images/home_arrow.png")} style={styles.imgArrowStyle}/>
                </View>
            </View>
        );
    }

    renderRightView() {
        if (this.props.rightIcon != undefined) {
            return <Image source={this.props.rightIcon} style={styles.imgRightStyle}/>
        }
        if (this.props.rightText != undefined) {
            return <Text>{this.props.rightText}</Text>
        }
        return null
    }
}

MineCommonItem.propTypes = {};

const styles = StyleSheet.create({
    commonItemStyle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10,
        height:50,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dddddd"
    },
    imgLeftStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight:10
    },
    partViewStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    imgArrowStyle: {
        width: 15,
        height: 15,
        marginLeft:5
    },
    imgRightStyle: {
        width: 24,
        height: 13
    }
})

export default MineCommonItem;