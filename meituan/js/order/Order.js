import React, {Component} from 'react';
import {View, Text, FlatList, RefreshControl, TouchableHighlight, StyleSheet} from 'react-native';

var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get("window");
const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataArr: CITY_NAMES,
            // 当前页
            page: 1,
            // 下拉刷新
            isRefresh: false,
            // 加载更多
            isLoadMore: false
        };

    }

    render() {
        return (
            <FlatList
                data={this.state.dataArr}
                //item显示的布局
                renderItem={({item, separators}) => this._renderItemView(item, separators)}
                //key
                keyExtractor={(item, index) => index + ""}
                //item分割线
                ItemSeparatorComponent={({highlighted}) => (
                    <View style={[styles.separatorStyle, highlighted && {marginLeft: 0}]}/>
                )}
                // 空布局
                ListEmptyComponent={this.renderEmptyView()}
                // 添加头布局
                ListHeaderComponent={this._renderHeaderView()}
                // 添加尾布局
                ListFooterComponent={this._renderFootView()}
                // 下拉刷新相关
                onRefresh={() => this._onRefresh()}
                refreshing={this.state.isRefresh}
                //加载更多
                onEndReached={() => this._onLoadMore()}
                onEndReachedThreshold={0.1}
            />
        );
    }

    _renderItemView(item, separators) {
        return (
            <TouchableHighlight
                onPress={() => this._onPress(item)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <Text style={styles.itemTextStyle}>{item}</Text>
            </TouchableHighlight>
        );
    }

    _onPress(item) {
        alert(item + "被选中了");
    }

    _onRefresh() {
        // 不处于下拉刷新
        if (!this.state.isRefresh) {
            this.setState({isRefresh: true, page: 1}) // loading
            this.fetchData()
        }
    }

    _onLoadMore() {
        // 不处于正在加载更多 && 有下拉刷新过，因为没数据的时候 会触发加载
        if (!this.state.isLoadMore && this.state.data.length > 0) {
            var page = this.state.page;
            this.setState({page: page + 1}) // loading
            this.fetchData()
        }
    }

    fetchData() {
        setTimeout(() => {
            var newDataArr = [];
            if (this.state.page == 1) {
                console.log("重新加载");
                for (let i = 0; i < CITY_NAMES.length; i++) {
                    newDataArr.push(CITY_NAMES[i] + i);
                }
                this.setState({dataArr: newDataArr});
                this.setState({isRefresh: false}); // 隐藏loading
            } else {
                console.log("加载更多");
                for (let i = 0; i < CITY_NAMES.length; i++) {
                    newDataArr.push(CITY_NAMES[i] + i + CITY_NAMES[i]);
                }
                var dataArr = this.state.dataArr;
                this.setState({dataArr: dataArr.concat(dataArr)});
            }

        }, 1000)
    }

    renderEmptyView() {
        return (
            <Text style={styles.itemTextStyle}>没有数据</Text>
        )
    }

    _renderHeaderView() {
        return (
            <Text style={styles.itemTextStyle}>header</Text>
        )
    }

    _renderFootView() {
        return (
            <Text style={styles.itemTextStyle}>foot</Text>
        )
    }

}

Order.propTypes = {};

const styles = StyleSheet.create({
    itemTextStyle: {
        width: width,
        height: 60,
        backgroundColor: "#0faeef",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white"
    },
    separatorStyle: {
        width: width,
        height: 5,
    }
})

export default Order;