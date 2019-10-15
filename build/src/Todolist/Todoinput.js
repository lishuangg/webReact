import React, { Component } from 'react';
//子组件--> 父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数

//受控组件与非受控组件（对于表单元素来说）

//受控组件：value值被react的状态控制，可以方便拿到input框的值、实时获取或处理输入的内容

export default class Todoinput extends Component{
    constructor(){
        super();
        this.state={
            n1:0,
            n2:0
        }
    }
    handleInput = (e) =>{
        if(e.keyCode === 13){
            // console.log(e.keyCode);
            this.props.addTodo(this.state.val);
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:parseInt[e.target.value]
        })
    }
    render(){
        return (
            <div>
                <label style={{color:this.state.n1+this.state.n2?'red':'green',fontSize:50}} htmlFor="inp">输入：</label>
                <input id="inp" name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
                +
                <input name="n2" onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
                <p dangerouslySetInnerHTML={{__html:this.state.n1+this.state.n2}}></p>
                <button>查询</button>
            </div>
        )
    }
}


//非受控组件
//代码简单、比较适用于一次性获取表单的值
// export default class Todoinput extends Component{
//     componentDidMount(){
//         console.log(this.inp.value);
//         // console.log(this);
//     }
//     search = () =>{
//         console.log(this.inp.value);
//     }
//     render(){
//         return (<div>
//                     <input ref="{(inp)=>this.inp = inp}" type="text" />
//                     <button ref="b" onClick={this.search}>查询</button>
//                 </div>)
//     }
// }