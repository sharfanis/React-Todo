import React  from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {


  render() {
  return this.props.proptodos.map( x => (
        <TodoItem 
        key = {x.id} 
        propTodoItem = {x} 
        markCompleted = { this.props.markCompleted}
        delTodo = {this.props.delTodo}
        />
  ))
  }
}

//Prop Types
Todos.propTypes = {
    proptodos: PropTypes.array.isRequired,
    markCompleted :PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
 