/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import Launch from "./js/launch/Launch";
import {Navigator} from 'react-native-deprecated-custom-components';

export default class LaunchNavigator extends Component {

    render() {
        return <Navigator
            initialRoute={{
                name:"引导页",
                component: Launch
            }}
            renderScene={
                (router, navigator)=> {
                    let Component = router.component;
                    return <Component {...router.params} navigator={navigator}/>
                }
            } />;
    }
}

AppRegistry.registerComponent(appName, () => LaunchNavigator);
