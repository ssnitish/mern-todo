import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TodoListComponent extends Component {
   state = {
      todos: [],
      loading: true,
      deleted: false,
      message: null,
      postId: null
   };

   baseUrl = "http://192.168.0.144:3006";

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
   handleDelete = (id) => {
      axios.delete(`${this.baseUrl}/api/todo/delete/${id}`)
         .then(response => {
            console.log('response from server', response);
            if (response['data']['response']['_id']) {
               let todos = [...this.state.todos];
               todos = todos.filter(todo => todo._id !== id)
               this.setState({
                  todos,
                  deleted: true,
                  message: "Alert! You just delted a todo"
               })
            } else {
               this.setState({
                  deleted: true,
                  message: "Unable to delete todo. Please try again"
               })
            }
         })
         .catch(error => {
            console.log('error from server', error);
            this.setState({
               deleted: true,
               message: "Unable to delete todo. Please try again"
            })
         })
   }

   render() {
      let message = null;
      if (this.state.loading) {
         return <div> Loading...</div>
      } else {
         let todos = this.state.todos.map((todo, index) => {
            return (
               <tr key={todo._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{todo.responsible}</td>
                  <td>{todo.description}</td>
                  <td>
                     <Link to={{
                        pathname: `/edit/${todo._id}`,
                        state: {
                           id: todo._id
                        }
                     }}
                        className="btn btn-primary mr-2">
                        Edit</Link>
                     <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(todo._id)}>
                        Delete
                     </button>
                  </td>
               </tr>
            );
         })
         if (!todos.length) {
            todos = (
               <tr>
                  <td colSpan="4">
                     <div className="alert alert-warning fade show text-center" role="alert">
                        <strong>OOPS!</strong> There are no todos currently.
                  </div>
                  </td>
               </tr>
            );
         }
         if (this.state.deleted) {
            message = (
               <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {this.state.message}
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
            )
         }
         return (
            <div className="container">
               {message}
               <div className="table-responsive">
                  <table className="table">
                     <thead className="thead-dark">
                        <tr>
                           <th scope="col">Serial No.</th>
                           <th scope="col">Responsible</th>
                           <th scope="col">Description</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {todos}
                     </tbody>
                  </table>
               </div>
            </div>
         );
      }
   }
}

export default TodoListComponent;