import React , { Component }  from 'react';
import {BrowserRouter as Router , Route  } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/Pages/About';
// import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

class App extends Component {
   state = {
       todos: []
   };


// HTTP Request using the componentDidMount() lifecycle method

 componentDidMount() {
   Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then((response) => {
     this.setState({todos: response.data});
   });
 }


// Toggle Complete
  markCompleted = (id) => {
    this.setState({ todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }


  delTodo = (id) => {
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=> {
    this.setState({ todos : [...this.state.todos.filter ((x) => x.id !== id)] });
  });

    //this.setState({ todos : [...this.state.todos.filter ((x) => x.id !== id)] });
  }

  addTodoItem = (title) => {
     // Add this to our state
    //  const newTodo = {
    //   id: uuidv4(),
    //    title: title,
    //    completed: false
    //  }
    // this.setState({todos: [...this.state.todos, newTodo]});

      Axios.post('https://jsonplaceholder.typicode.com/todos' , {
        title: title,
        completed: false
      }).then((res) => {
        //this thing send reqquests to this fake api and then in response comes 
        //back with an id and it adds it to the setState. res.data holds what we have sent to the 
        //the server adn comes back with Id , title and completed . 
        this.setState({todos: [...this.state.todos, res.data]});
      });
     
  }


  render() {
    console.log(this.state.todos);
  return (
    <Router>
    <div className="App">
<div className="container">
      <Header/>

      <Route exact path="/" render={props => (
        <React.Fragment>
       <AddTodo addTodo={this.addTodoItem}/>
      <Todos 
     proptodos={this.state.todos}
     markCompleted = {this.markCompleted}
     delTodo = {this.delTodo}
     />
    </React.Fragment>
    )} />

   <Route path="/about" 
       component={About} 
    />
    
     </div>
    </div>
    </Router>
  );
  }
}

export default App;
 