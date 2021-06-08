'use strict';

import Taro from '@tarojs/taro';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';
const print = function(value) {
  console.log(value);
};
class Index extends Component {
  constructor(props) {
    super(props);
    let defaultState = {};
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    super();
    console.log('super props');
    this.fetch_example();
    this.jsonp_example();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  render() {
    return (
      <View style={styles.box}>
        {this.state.data.map((item, index) => {
          return (
            <View
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <View style={styles.bd}>
                <Image style={styles.layer} src={this.state.layer} />
                <Image style={styles.bg} src={this.state.bg} />
                <View style={styles.wrap}>
                  <Image style={styles.riverdinwei} src={this.state.riverdinwei} />
                  <Text style={styles.distance}>{this.state.distance}</Text>
                </View>
              </View>
              <View style={styles.main}>
                <Text style={styles.title}>{this.state.title}</Text>
              </View>
              <View style={styles.ft}>
                <View style={styles.block}>
                  <Image style={styles.xianjin} src={this.state.xianjin} />
                  <Text style={styles.fashionHome}>{this.state.fashionHome}</Text>
                </View>
                {this.isReadCountShow(item.readCount) && (
                  <View style={styles.group}>
                    <Image style={styles.favorite} src={this.state.favorite} />
                    <Text style={styles.num}>{this.state.num}</Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
export default Index;
