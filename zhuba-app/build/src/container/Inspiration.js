import React, { Component } from 'react';
import { NavBar,Grid,Tabs } from 'antd-mobile';
import '../css/inspiration.css';

import linggan1 from "../images/linggan1.jpg";
import linggan2 from "../images/linggan2.jpg";
import linggan3 from "../images/linggan3.jpg";
import linggan4 from "../images/linggan4.jpg";
import linggan5 from "../images/linggan5.jpg";
import linggan6 from "../images/linggan6.jpg";

const photo = [`${linggan1}`,`${linggan2}`,`${linggan3}`,`${linggan4}`,`${linggan5}`,`${linggan6}`]
const text = ['橙色律动','儿童房','翻滚吧，地毯君','角落里的遐想','橙色律动','橙色律动']
const data = Array.from(new Array(6)).map((_val, i) => ({
    icon: photo[i],
    text: text[i]
}));
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '更多' }
];

export default class Inspiration extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>

                <Tabs tabs={tabs} initialPage={0}>
                    <Grid data={data} hasLine={false} square={false} columnNum={2} renderItem={dataItem => (
                        <div style={{margin:"10px"}}>
                            <img src={dataItem.icon} style={{ width: '100%'}} alt="" />
                            <div style={{width:"100%",backgroundColor:"#fff",color:"#000",textAlign:"left",padding:"5px"}}>
                                <img src={dataItem.icon} style={{width:"20%",borderRadius:"50%"}} alt="" />
                                <span>{dataItem.text}</span>
                            </div>
                        </div>  
                    )}/>
                </Tabs>
            </div>
        )
    }
}
