import React, {Component} from 'react';
import {View, Text, Switch, Image, StyleSheet} from 'react-native';

class MoreCommonItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSwitch: false
        };

    }

    static defaultProps = {
        title: "",
        rightText: undefined,
        isSwitch: false
    }

    render() {
        return (
            <View style={styles.commonItemStyle}>
                <Text>{this.props.title}</Text>
                {this.getRightView()}
            </View>
        );
    }

    getRightView() {
        if (this.props.isSwitch) {
            return <Switch value={this.state.isSwitch} onValueChange={() => {
                this.setState({isSwitch: !this.state.isSwitch})
            }}/>
        }
        return (
            <View style={{flexDirection: "row", alignItems: "center"}}>
                {this.getTxtView()}
                <Image source={require("../../res/images/home_arrow.png")} style={styles.imgArrowStyle}/>
            </View>
        );
    }

    getTxtView() {
        if (this.props.rightText != undefined) {
            return <Text style={{marginRight: 5}}>{this.props.rightText}</Text>;
        }
        return null;
    }
}

MoreCommonItem.propTypes = {};

const styles = StyleSheet.create({
    commonItemStyle: {
        flexDirection: "row",
        height: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dddddd"
    },
    imgArrowStyle: {
        width: 15,
        height: 15
    }
})

export default MoreCommonItem;