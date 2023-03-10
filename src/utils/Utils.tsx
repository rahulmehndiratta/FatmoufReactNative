import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import NetInfo from '@react-native-community/netinfo';
import {keyName, MyAsyncStorage} from '@MyAsyncStorage';
import React, {useEffect, useState} from 'react';
import {Alert, Modal, Share, Text, View} from 'react-native';
import {color} from '@styles';

export const Utils = {
  exp_pattern_mobile: /^[0-9]{6,14}$/,
  exp_pattern_email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  exp_pattern_url:
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,

  isUrlValid(url: any) {
    let reg = Utils.exp_pattern_url;
    console.log('Url validation', reg.test(url));

    return reg.test(url);
  },

  isEmailValid(email: any) {
    let reg = Utils.exp_pattern_email;
    console.log('Email validation', reg.test(email));

    return reg.test(email);
  },

  calculateHeight(componentHeight: number) {
    //812 is the screen height which we used to create design of the app
    return responsiveHeight((100 / 812) * componentHeight);
  },

  calculateWidth(componentWidth: number) {
    //375 is the screen width which we used to create design of the app
    return responsiveWidth((100 / 375) * componentWidth);
  },

  randomColor() {
    return Math.floor(Math.random() * 16777215);
  },

  _getRandomId() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
  },

  async isNetwork() {
    let netFlag = false;
    await NetInfo.fetch()
      .then(isConnected => {
        if (isConnected.isConnected) {
          netFlag = true;
        }
      })
      .catch(err => {
        if (err) {
          netFlag = false;
        }
      });
    return netFlag;
  },

  async _getUserId() {
    const user = await MyAsyncStorage.getData(keyName.userData);
    return user?.user?.id;
  },
  async _getToken() {
    const user = await MyAsyncStorage.getData(keyName.userData);
    console.log('userToken', user?.token);

    return user?.token;
  },

  async _setUserData(userData: any) {
    MyAsyncStorage.saveData(keyName.userData, userData);
  },

  async _getUserData() {
    return await MyAsyncStorage.getData(keyName.userData);
  },

  async _logOut() {
    MyAsyncStorage.logOut();
  },

  toHHMMSS(secs: any) {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map(v => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  },

  async onShare() {
    try {
      const result = await Share.share({
        // title: 'App link',
        message: `Please visit our Website to take better knowledege , AppLink :${'https://fatmouf.com/'}`,
        url: 'https://fatmouf.com/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message + '');
    }
  },

  //    showLoading(isLoading:any) {
  //     return isLoading ? <LoadingView style={{}}/> : <View/>;
  // }
  isNumeric(value: string) {
    // return validate(value.isNumeric) ? true : false
    console.log(!value.match(/^[^0-9]+$/));

    return !value.match(/^[^0-9]+$/);
  },

  isCharacter(value: any) {
    return !!value.match(/^[^a-zA-Z]+$/);
  },

  isDigit(value: any) {
    console.log(/^[0-9]+$/.test(value));
    return !!/^[0-9]+$/.test(value);
  },
};
