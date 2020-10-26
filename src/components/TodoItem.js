import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {


    //Method to get the styling for todo items.
  getStyle = () => {
    //   if(this.props.propTodoItem.completed) {
    //       return {
    //           textDecoration: 'line-through'
    //       }
    //   } else {
    //       return {
    //         textDecoration: 'none'
    //       }
    //   }

    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        fontFamily: 'URW Chancery L, cursive',
        textDecoration : this.props.propTodoItem.completed ? 'line-through' : 'none'
    }
  }

  markCompleted = () => {

  }



    render() {

       const { id, title } = this.props.propTodoItem;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange= {this.props.markCompleted.bind(this , id)} /> {' '}
                    { title }  
                    <button style={ btnStyle } onClick= {this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

    //Prop Types
    TodoItem.propTypes = {
        propTodoItem: PropTypes.object.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


// const itemStyle = {
//     backgroundColor : '#f4f4f4'
// }


export default TodoItem;
