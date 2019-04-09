import React from 'react';
import axios from 'axios';

class EditTodo extends React.Component {
   baseUrl = "http://192.168.0.144:3006/api/todo"
   state = {
      description: "",
      responsible: "",
      priority: "",
      completed: false,
      status: "",
      error: false
   }
   handleInput = (event, selector) => {
      // console.log(event.target.value, selector);
      const value = event.target.value;
      switch (selector) {
         case 'description': this.setState({ description: value }); break;
         case 'responsible': this.setState({ responsible: value }); break;
         case 'priority': this.setState({ priority: value }); break;
      }
   }
   handleSubmit(event) {
      event.preventDefault();
      const { id } = this.props.location.state;
      axios.patch(`${this.baseUrl}/todos/${id}`, this.state)
         .then(response => {
            console.log(`${JSON.stringify(response, null, 2)}\npudated successfully`);
            this.setState({
               status: "Todo updated successfully",
               error: false
            })
         })
         .catch(error => {
            console.log(`error occured\n${JSON.stringify(error, null, 2)}`)
            this.setState({
               status: "Unable to update todo. Please try again",
               error: true
            })
         })
   }
   render() {
      let status;
      if (this.state.status) {
         status = (
            <div className={this.state.error ? "alert alert-danger" : "alert alert-success"} role="alert">
               {this.state.status}
            </div>
         )
      } else {
         status = "";
      }
      return (
         <div className="container">
            {status}
            <form onSubmit={(event) => this.handleSubmit(event)}>
               <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Todo Description</label>
                  <input
                     type="text"
                     className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Todo Description"
                     required={true}
                     onInput={(event) => this.handleInput(event, 'description')} />
               </div>
               <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Enter responsible</label>
                  <input
                     type="text"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="Enter responsible"
                     required={true}
                     onInput={(event) => this.handleInput(event, 'responsible')} />
               </div>
               <div className="d-flex mb-1">Select priority</div>
               <div className="d-flex mb-2">
                  <div className="form-check mr-3">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="low"
                        required={true}
                        checked={this.state.priority === "low"}
                        onChange={(event) => this.handleInput(event, 'priority')} />
                     <label className="form-check-label" htmlFor="exampleRadios1">Low</label>
                  </div>
                  <div className="form-check mr-3">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="medium"
                        required={true}
                        checked={this.state.priority === "medium"}
                        onChange={(event) => this.handleInput(event, 'priority')} />
                     <label className="form-check-label" htmlFor="exampleRadios1">Medium</label>
                  </div>
                  <div className="form-check mr-3">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="high"
                        required={true}
                        checked={this.state.priority === "high"}
                        onChange={(event) => this.handleInput(event, 'priority')} />
                     <label className="form-check-label" htmlFor="exampleRadios1">High</label>
                  </div>
               </div>
               <button type="submit" className="btn btn-primary">Edit Todo</button>
            </form>
         </div>
      );
   }
}

export default EditTodo;