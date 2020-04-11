import React, { Component } from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';

class Todo extends Component {
    markComplete = () => {
      
}


    //onchange is the bind event see dev inspect // passing event to App.js

    render() {
        
        return this.props.todos.map((todo) => (
        <Todoitems key={todo.id} todo={todo}markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));

       
    }
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
  }

export default Todo;