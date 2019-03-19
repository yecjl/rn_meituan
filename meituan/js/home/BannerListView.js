import React, {Component} from 'react';
import {View, Text, ListView, Image, StyleSheet} from 'react-native';

var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get("window");

class BannerListView extends React.Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };

    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.listViewStyle}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View style={styles.itemViewStyle}>
                <Image source={rowData.image} style={styles.imgStyle}/>
                <Text>{rowData.title}</Text>
            </View>
        );
    }
}

BannerListView.propTypes = {};

const styles = StyleSheet.create({
    listViewStyle: {
        width: width,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    itemViewStyle: {
        width: width / 5,
        height: width / 5,
        alignItems: "center",
        justifyContent: "center"
    },
    imgStyle: {
        width: 40,
        height: 40
    }
})

export default BannerListView;