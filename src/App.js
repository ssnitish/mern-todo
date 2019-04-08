import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoListComponent from './todos-list.component';
import EditTodo from "./edit-todo.component";
import CreateTodo from './create-todo.component'
import Navbar from './navbar.component';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="">
            <Router>
               <Navbar />
               <div className="App">
                  <Route path="/" exact component={TodoListComponent} />
                  <Route path="/edit/:id" component={EditTodo} />
                  <Route path="/create" component={CreateTodo} />
               </div>
            </Router>
         </div>
      );
   }
}

export default App;
