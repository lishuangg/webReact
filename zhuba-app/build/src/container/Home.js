import React, { Component } from 'react';
import { NavBar,Carousel,WingBlank,WhiteSpace,Grid } from 'antd-mobile';
import '../css/home.css';

import shouyelunbo1 from '../images/shouyelunbo1.jpg';
import shouyelunbo2 from '../images/shouyelunbo2.jpg';
import remen from '../images/remen.jpg';
import siren from '../images/siren.jpg';
import xuangou from '../images/xuangou.jpg';
import tuijian from '../images/tuijian.jpg';

const photos = [`${remen}`,`${siren}`,`${xuangou}`];
const text = ['热门品牌','私人搭配师','选购指南'];
const photo = Array.from(new Array(3)).map((_val, i) => ({
    icon: photos[i],
    text: text[i]
}));

export default class Home extends Component {
    state = {
        data: ['1','2'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: [`${shouyelunbo1}`,`${shouyelunbo2}`],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar></NavBar>
                
                <Carousel autoplay infinite>
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                
                <WhiteSpace size="lg"/>
                <WingBlank size="sm"><Grid data={photo} hasLine={false} columnNum={3} renderItem={dataItem => (
                        <div style={{margin:"3px",backgroundColor:"#000"}}>
                            <img src={dataItem.icon} style={{ width: '100%',opacity:"0.6", filter: "alpha(opacity=60)"}} alt="" />
                            <span style={{position:"absolute",top:"50%",width:"60%",left:"20%",color:"#fff"}}>{dataItem.text}</span>
                        </div>  
                )}/></WingBlank>    
                
                <div>
                    <p style={{borderLeft:"4px solid #3fcccb",paddingLeft:"8px"}}>热门推荐</p>
                    <img src={`${tuijian}`} style={{width:"100%"}}/>
                    <img src={`${tuijian}`} style={{width:"100%"}}/>
                </div>           
            </div>
        )
    }
}
