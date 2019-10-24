import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todone extends Component {
    render() {
        return (
            <div class="center todo todone">
                <h2>已经完成<span>{this.props.done.length}</span></h2>
                <ul>
                    {
                        this.props.done.map((item,index)=><li key={index}><input type="checkbox" checked onClick={()=>{this.props.doneCheckChange(index)}}/>{item}<button onClick={()=>{this.props.doneDelTodo(index)}}>X</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
Todone.propTypes = {
    done: PropTypes.array
}