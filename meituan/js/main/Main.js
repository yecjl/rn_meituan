import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
import Home from "../home/Home";
import Order from "../order/Order";
import More from "../more/More";
import Mine from "../mine/Mine";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'order'
        };

    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image source={require("../../res/images/icon_tabbar_homepage.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../res/images/icon_tabbar_homepage_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Navigator
                        initialRoute={{
                            name: "首页",
                            component: Home
                        }}
                        renderScene={
                            (router, navigator) => {
                                let Component = router.component;
                                return <Component {...router.params} navigator={navigator}/>;
                            }
                        }/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'order'}
                    title="商家"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image source={require("../../res/images/icon_tabbar_merchant_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../res/images/icon_tabbar_merchant_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'order'})}>
                    <Order/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image source={require("../../res/images/icon_tabbar_mine.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../res/images/icon_tabbar_mine_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Mine/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image source={require("../../res/images/icon_tabbar_misc.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../res/images/icon_tabbar_misc_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'more'})}>
                    <More/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

Main.propTypes = {};

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    tabText: {

    },
    selectedTabText: {
        color: "rgba(255,96,0,1.0)"
    }
})

export default Main;