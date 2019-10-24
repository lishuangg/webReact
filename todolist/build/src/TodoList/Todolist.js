import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import Todone from './Todone';

export default class Todolist extends Component {
    constructor(){
        super();
        var localTodo = localStorage.todo != null ? JSON.parse(localStorage.todo) : [];
        var localDone = localStorage.done != null ? JSON.parse(localStorage.done) : [];
        this.state = {
            todo:localTodo,
            done:localDone
        }
    }
    addItem = (data) =>{
        var todo = [...this.state.todo,data];
        this.setState({
            todo:todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todo));
        })
    }
    doneAddItem = (data) =>{
        var done = [...this.state.done,data];
        this.setState({
            done:done
        },()=>{
            localStorage.setItem('done',JSON.stringify(done));
        })
    }
    todoDelItem = (a) =>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todo));
        });
    }
    doneDelItem = (a) =>{
        var done = [...this.state.done];
        done.splice(a,1);
        this.setState({
            done:done
        },()=>{
            localStorage.setItem('done',JSON.stringify(done));
        })
    }
    todoCheckChangeItem = (check) =>{
        this.doneAddItem(this.state.todo[check]);
        this.todoDelItem(check);
    }
    doneCheckChangeItem = (check) =>{
        this.addItem(this.state.done[check]);
        this.doneDelItem(check);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todoDelTodo={this.todoDelItem} todoCheckChange={this.todoCheckChangeItem} todo={this.state.todo}/>
                <Todone doneDelTodo={this.doneDelItem} doneCheckChange={this.doneCheckChangeItem} done={this.state.done}/>
            </div>
        )
    }
}