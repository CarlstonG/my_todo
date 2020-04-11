import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitems extends Component {
  
  // code styling for true or false or any var inside app.js
    getStyle = () => {
       
       //short version 
       return {
        fontweight: '400',
        background: 'skyblue',
        padding: '8px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }



       // long version ------// 
       // if(this.props.todo.completed){
       //     return {
       //         textDecoration: 'line-through'
       //     }
       // }
       // else {
       //     return {
       //         textDecoration: 'none'
       //     }
        }
    
    

    
    //onchange is the bind event see dev inspect // passing event to Todo.js
    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
          
           <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                {''}
               {title}
               <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
               </p>
             
            </div>
        )
    }
}

Todoitems.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default Todoitems

const btnStyle = {
    background: '#333',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginLeft: '2px'

}