//index.js文件是程序的入口
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTime from './ShowTime';//默认引入js文件，所以.js可以省略
import Todolist from './Todolist/Todolist';
import Request from './Request/Request';
//引入时的组件名字可以更改,默认导出是直接写组件名称，命名导出要加上{}

// //组件交互
// //父组件 --> 子组件：调用时在子组件上添加属性，在子组件中通过props获取数据
// ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));

// ReactDOM.render(<Todolist/>,document.getElementById('root'));

ReactDOM.render(<Request/>,document.getElementById('root'));


// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// render  将内容渲染到标签节点中

// var str = 'hello';
// var ele = <h1>{str}</h1>;  //用标签代替一个对象，react中特有的
// ReactDOM.render(ele, document.getElementById('root'));
    //document.getElementById('root').innerHTML = '<p>react</p>'

// jsx表达式会被react转成一个对象
// var ele = React.createElement('div',{'id':'box'},'hello',
//      React.createElement('h1',{'id':'h'},'react'));
// console.log(ele);
// ReactDOM.render(ele, document.getElementById('root'));


// var obj = {
//     type:'div',
//     props:{
//         id:'box',
//         class:'box',
//         children:['hello',{
//             type:'h1',
//             props:{
//                 id:'h',
//                 class:'h',
//                 children:['react']
//             }
//         }]
//     }
// }
// function render(obj,container){
//     var {type,props} = obj;  //ES6的解剖赋值
//     //文档碎片
//     var fragment = document.createDocumentFragment();//不是一个真实的dom节点，只是一个容器,浏览器不会对它进行处理

//     var ele = document.createElement(type);
//     for(var item in props){
//         if(item === 'class'){
//             ele.className = props[item];
//         }else if(item === 'children'){
//             for(var i=0;i<props[item].length;i++){
//                 if(typeof props[item][i] === 'object'){
//                     render(props[item][i],ele);
//                 }else{
//                     var txt = document.createTextNode(props[item][i]);
//                     ele.appendChild(txt);
//                 }  
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// render(obj,document.getElementById('root'));




// 注意以下性能问题及优化方法:
// 加载html文件、浏览器解析html生成DOM树
// link加载css文件、解析css规则、生成render tree、浏览器渲染引擎渲染render tree

//页面回流（重排）：内容改变、大小改变、结构改变(耗损性能)
//页面重绘：整体布局不动，只是把字体颜色、背景颜色等样式修改

// 1、对节点的操作先用变量代替
// console.time('a');
// for(var i=0;i<1000;i++){document.body.innerHTML += '<li>'+i+'</li>';}//页面回流1000次，耗损性能
// console.timeEnd('a');

// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){str+='<li>'+i+'</li>';}
// document.body.innerHTML = str;//页面回流一次，性能好
// console.timeEnd('a');

// 2、display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// 3、Node.offsetLeft()、Node.offsetWidth()等慎用，这些属性是只读的，每次使用都会调用一次、增加回流
// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1;
//     root.style.width = width + 'px';
// },100);

// 4、文档碎片的概念


//react元素创建之后不会改变
// function tick(){
//     var e = <div>
//         <p>当前时间</p>
//         <p>当前时间</p>
//         <h1>{new Date().toLocaleString()}</h1>
//     </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();//检索哪里更改，则修改哪里
// setInterval(tick,1000);


// 函数定义组件（无生命周期函数）
// 当只是渲染结构时
// function Todo(props){
//     return (
//         <div>
//             {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5 && <h1>todo</h1>}
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(
//                         (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));
