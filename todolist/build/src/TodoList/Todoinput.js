import React, { Component } from 'react';

export default class Todoinput extends Component {
    handleInput = (e) => {
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: parseInt(e.target.value===''?0:e.target.value)
        })
    }
    render() {
        return (
            <div class="header">
                <div class="center">
                    <label htmlFor="input" class="label">ToDoList</label>
                    <input id="input" name="input" placeholder='添加Todo' onChange={this.handleChange} onKeyDown={(e)=>this.handleInput(e)} type='search'/>
                </div>
            </div>
        )
    }
}