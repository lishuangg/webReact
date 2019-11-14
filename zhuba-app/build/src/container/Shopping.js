import React, { Component } from 'react';
import { NavBar,Carousel,SearchBar,WingBlank,WhiteSpace,Grid } from 'antd-mobile';
import '../css/shopping.css';

import lunbo from '../images/shangchenglunbo.jpg';
import zhuo from '../images/zhuo.png';
import yi from '../images/yi.png';
import chuang from '../images/chuang.png';
import ji from '../images/ji.png';
import gui from '../images/gui.png';
import shujia from '../images/shujia.png';
import shafa from '../images/shafa.png';
import shipin from '../images/shipin.png';
import jiaju from '../images/jiaju.png';
import fenlei from '../images/fenlei.png';
import shangpin1 from '../images/shangpin1.jpg';
import shangpin2 from '../images/shangpin2.jpg';

const pic = [`${zhuo}`,`${chuang}`,`${yi}`,`${ji}`,`${gui}`,`${shujia}`,`${shafa}`,`${shipin}`,`${jiaju}`,`${fenlei}`];
const col = ['#fd437c','#34c5fe','#fc9a19','#36d2d1','#fc2e2c','#4343f7','#af1eff','#24e077','#8f87c1','#7d7c82'];
const text = ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','分类'];
const data1 = Array.from(new Array(10)).map((_val,i) => ({
    icon: pic[i],
    color: col[i],
    text: text[i]
}));
const photo = [`${shangpin1}`,`${shangpin2}`];
const text2 = ['Top Art Studio 欧式风格精细...','顺顺工艺欧式风格塑料外框黑...'];
const price = ['￥39.95','￥89.99'];
const data2 = Array.from(new Array(2)).map((_val,i) => ({
    icon: photo[i],
    text2: text2[i],
    price: price[i]
}));

export default class Shopping extends Component {
    state = {
        data: ['1','2','3','4'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: [`${lunbo}`,`${lunbo}`,`${lunbo}`,`${lunbo}`],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar></NavBar>
                
                <div style={{position:"relative"}}>
                    <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{position:"absolute",top:"0",left:"0",width:"100%",zIndex:"99",backgroundColor:"raba(0,0,0,0.1)"}}/>
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
                </div>

                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Grid data={data1}
                        square={false}
                        hasLine={false}
                        columnNum={5}
                        renderItem={dataItem => (
                            <div style={{margin:"5px"}}>
                            <img src={dataItem.icon} style={{width:'75%',padding:"8px",borderRadius:"50%",backgroundColor:dataItem.color}} alt="" />
                            <div style={{height:"15px",color:'#111',fontSize:'10px'}}>
                                <span>{dataItem.text}</span>
                            </div>
                            </div>
                        )}
                        />
                </WingBlank>

                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Grid data={data2}
                        square={false}
                        hasLine={false}
                        columnNum={2}
                        renderItem={dataItem => (
                            <div style={{padding:'5px'}}>
                            <img src={dataItem.icon} style={{ width: '100%'}} alt="" />
                            <div style={{fontSize:'10%',marginTop:'10px',textAlign:"left"}}>
                                <p>{dataItem.text2}</p>
                                <p>{dataItem.price}</p>
                            </div>
                            </div>
                        )}
                        />
                </WingBlank>
            </div>
        )
    }
}
