import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
import Home from "../home/Home";
import Find from "../find/Find";
import More from "../more/More";
import Mine from "../mine/Mine";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home'
        };

    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
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
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    renderIcon={() => <Image source={require("../../res/images/icon_tabbar_merchant_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../res/images/icon_tabbar_merchant_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    <Find/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={require("../../res/images/icon_tabbar_mine.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../res/images/icon_tabbar_mine_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Mine/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
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
    }
})

export default Main;