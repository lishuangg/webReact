import React,{Component,Fragment} from 'react';

// 类定义组件 组件名称必须以大写字母开头
export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        this.handleClick = this.handleClick.bind(this);//bind绑定的方法一：在构造函数中间bind绑定this，只需要绑定一次
        //<button onClick={ this.handleClick.bind( this ) }> bind绑定的方法二：在下面render的标签中引入，每一次点击都会绑定一次
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
        
    }

    // handleClick = () =>{}  事件处理函数绑定this ,可以不使用bind绑定
    // handleClick(){  //这是在类里面声明的一个方法，不是函数，不用function
    //     console.log(this);//默认不会绑定this到累的方法上
    //     console.log('点击成功');
    // }

    //传参：（1）函数声明时事件对象作为最后一个参数传入
    //（2） 箭头函数的事件对象显示传入；bind 会隐式传入
    handleClick(num,e){
        console.log(this);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(this);
        console.log('点击成功');
    }

    render(){
        console.log('render');
        //原生标签中引入函数是<div onclick="fn()">
        return (
            <Fragment>
                {/* <div onClick={this.handleClick}>{this.state.time}</div>  没有参数的方法 */}
                {/* 传参 */}
                <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

// export default ShowTime; //默认导出,default只能有一个
//export {ShowTime}; //命名导出，可以导出多个 