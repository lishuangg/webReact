import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';

//继承类是没有小括号的，不是函数
export default class Todolist extends Component{
    constructor(){
        super();
        this.state = { //状态
            todo:[1,2,3]
        }

        // var arr = [1,2,{a:100}];
        // // var b = [...arr];
        // //深拷贝
        // var b = JSON.parse(JSON.stringify(arr));
        // b[2].a = 200;
        // console.log(arr);

        //对象的拷贝
        // var a = {a:100};
        // var b = {b:200};
        // var o = Object.assign({},a,b);//将所有对象整合为一个对象放到第一个对象，属性不同直接添加，属性相同则直接覆盖
        // console.log(o === a);
        // console.log(o);

        //Object.keys返回由属性名组成的一个数组
        // var a = {a:100,b:200};
        // Object.keys(a).forEach((item)=>{
        //     console.log(item);
        //     console.log(a[item]);
        // })
        // //尽量不用for..in..
        // for(var item in a){
        //     console.log(a);
        // }
    }
    addItem = (msg) =>{
        // this.state.todo.push(msg)
        // console.log(this.state.todo)
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
    }
    delItem = (a) =>{
        // this.state.todo.splice(a,1);//不要对状态直接处理
        //深拷贝\浅拷贝
        //状态（state)：
        //1、不要直接改变、处理状态
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2、setState是异步的
        this.setState({
            todo:this.state.todo
        })
    }
    render(){
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
