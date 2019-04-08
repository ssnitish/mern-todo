import React, { Component } from 'react';
import axios from 'axios';

class TodoListComponent extends Component {
   state = {
      todos: [],
      loading: true
   };

   baseUrl = "http://192.168.0.145:3006";

   componentDidMount() {
      console.log('[ComponentDidMount called]');
      axios.get(`${this.baseUrl}/api/todo/list`)
         .then(response => {
            console.log('[response]', response)
            this.setState({
               loading: false,
               todos: response['data']['todos']
            })
         })
         .catch(error => {
            console.log('[error occured]', error)
         })
   }
   render() {

      if (this.state.loading) {
         return <div> Loading...</div>
      } else {
         const todos = this.state.todos.map(todo => {
            return (
               <div className="card" key={todo._id}>
                  <div className="card-body">
                     <h5 className="card-title">{todo.responsible}</h5>
                     <p className="card-text">{todo.description}</p>
                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
               </div>
            );
         })
         console.log('todos',todos);
         return (
            <div className="container">
               {todos}
            </div>
         );
      }
   }
}

export default TodoListComponent;