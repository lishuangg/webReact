import React, { Component } from 'react';
import Axios from 'axios';

export default class Request extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        // 通过网络获取一个JSON文件,它只是一个 HTTP 响应，而不是真的JSON。为了获取JSON的内容，我们需要使用json()方法。
        // fetch() 接受第二个可选参数，一个可以控制不同配置的 init 对象：
        fetch('https://api.apiopen.top/musicRankingsDetails?type=1',
        {method:'post',body:'{name:111}'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({
                data:res.result
            })
        })

        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1').then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         data:res.data.result
        //     })
        // });
    }
    render(){
        return (<div>
            <h1>请求接口</h1>
            <ul>
                {
                    this.state.data.map((item,index)=>(
                        <li key={index}>
                            <h2>{item.album_title}</h2>
                            <p>{item.author}</p>
                        </li>
                    ))
                }
                
            </ul>
        </div>)
    }
}