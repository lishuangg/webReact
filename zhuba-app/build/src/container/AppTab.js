import React from 'react';
import { NavBar,TabBar } from 'antd-mobile';
import Home from './Home';
import Inspiration from './Inspiration';
import Shopping from './Shopping';

import home from '../images/home.png';
import homeSelect from '../images/homeSelect.png';
import inspiration from '../images/inspiration.png';
import inspirationSelect from '../images/inspirationSelect.png';
import shopping from '../images/shopping.png';
import shoppingSelect from '../images/shoppingSelect.png';
import me from '../images/me.png';
import meSelect from '../images/meSelect.png';
import sousuo from '../images/sousuo.png';
import gouwu from '../images/gouwu.png';

export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      nav: '住吧家居',
      pic: ''
    };
  }
  
  render() {
    return (
      <div>
        <div style={{position:"fixed",top:"0",left:"0",width:"100%",zIndex:"100"}}>
          <NavBar style={{backgroundColor:"#3fcccb"}}
              rightContent={[
                <img src={this.state.pic} style={{width:"25%"}}/> 
              ]}>{this.state.nav}</NavBar>
        </div>

        <div style={{ position:'fixed', height:'100%', width:'100%', top:0 }} >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white">
            <TabBar.Item
              title="首页"
              key="home"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${home}) center center /  21px 21px no-repeat` }}/>
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${homeSelect}) center center /  21px 21px no-repeat` }}/>
              }
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                  nav: '住吧家居',
                  pic: ''
                });
              }}>
              <Home/>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${inspiration}) center center /  21px 21px no-repeat` }}/>
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${inspirationSelect}) center center /  21px 21px no-repeat` }}/>
              }
              title="灵感"
              key="inspiration"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                  nav: '灵感',
                  pic: `${sousuo}`
                });
              }}>
              <Inspiration/>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${shopping}) center center /  21px 21px no-repeat` }}/>
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${shoppingSelect}) center center /  21px 21px no-repeat` }}/>
              }
              title="商城"
              key="shopping"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                  nav: '商城',
                  pic: `${gouwu}`
                });
              }}>
                <Shopping/>
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: `${me}`}}
              selectedIcon={{ uri: `${meSelect}` }}
              title="我的"
              key="me"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                  nav: '我的',
                  pic: ''
                });
              }}>我的
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
      
    );
  }
}
