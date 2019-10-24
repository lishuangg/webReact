import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        return (
            <div class="center todo todoing">
                <h2>正在进行<span>{this.props.todo.length}</span></h2>
                <ul>
                    {
                        this.props.todo.map((item,index)=><li key={index}><input type="checkbox" onClick={()=>{this.props.todoCheckChange(index)}} checked={false}/>{item}<button onClick={()=>{this.props.todoDelTodo(index)}}>X</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array
}