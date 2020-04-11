import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'react-uuid';



class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Play Games',
        completed: false
      },
      {
        id: uuid(),
        title: 'Run Run Run Run',
        completed: false
      },
    ]

  }


  // toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }


//delete todo

delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

// Add todo 
addTodo = (title) => {
  const newTodo = {
    id: uuid(),
    title,
    complete: false  
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}






  render() {
    
     //onchange is the bind event see dev inspect //catching events from Todo.js and Todoitems.js
  //passing the value of todos to todo
    return (
      <div className="App">
          <div className="container">
      <Header/>
      <AddTodo addTodo={this.addTodo}/>
      
        <Todo todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}/>
        </div>
        </div>
    );
  }
}




export default App;
