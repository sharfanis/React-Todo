import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
   
    state = {
       title : ''
   }

   // there is a onchange function with input field which needs to be taken care
   // so everytime there is a change in input field we need to set the state which we did .
   onChange = (x) => {
      this.setState({ [x.target.name] : x.target.value})
   }

   onSubmit = (e) => {
         e.preventDefault();
         this.props.addTodo(this.state.title);
         this.setState({title: ''});
   }

    render() {
        return (
            <form onSubmit={this.onSubmit}  style={{display: 'flex'}}>
                <input 
                style={{flex: '10', padding: '5px'}}
                type="text" 
                name="title" 
                placeholder="Add Todo Item..."
                value={this.state.title}
                onChange= {this.onChange}
                />

                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex:'1'}}
                />
            </form>
        )
    }
}

//Prop Types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

// const inputStyle = {
//     padding: '18px',
//     display: 'block',
//     border: 'none',
//     borderBottom: '1px solid #ccc',
//     width: '100%'
// }

export default AddTodo

