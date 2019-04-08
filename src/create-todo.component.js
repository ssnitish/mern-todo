import React from 'react';

class CreateTodo extends React.Component {
   state = {
      description: "",
      responsible: "",
      priority: "",
      completed: false
   }
   handleInput = (event, selector) => {
      // console.log(event.target.value, selector);
      const value = event.target.value;
      switch(selector) {
         case 'description': this.setState({description: value}); break;
         case 'responsible': this.setState({responsible: value}); break;
         case 'priority': this.setState({priority: value}); break;
      }
   }
   handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
   }
   render() {
      return (
         <div className="container">
            <form onSubmit={(event) => this.handleSubmit(event)}>
               <div class="form-group">
                  <label for="exampleInputEmail1">Todo Description</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Todo Description" 
                  onInput={(event) => this.handleInput(event, 'description')}/>
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1">Enter responsible</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Enter responsible" 
                  onInput={(event) => this.handleInput(event, 'responsible')}/>
               </div>
               <div className="d-flex mb-2">
               <div class="form-check mr-3">
                  <input 
                  class="form-check-input" 
                  type="radio" 
                  name="exampleRadios" 
                  id="exampleRadios1" 
                  value="low" 
                  checked={this.state.priority ==="low"}
                  onChange={(event)=>this.handleInput(event, 'priority')} />
                  <label class="form-check-label" for="exampleRadios1">Low</label>
               </div>
               <div class="form-check mr-3">
                  <input 
                  class="form-check-input" 
                  type="radio" 
                  name="exampleRadios" 
                  id="exampleRadios1" 
                  value="medium"
                  checked={this.state.priority ==="medium"}
                  onChange={(event) => this.handleInput(event, 'priority')} />
                  <label class="form-check-label" for="exampleRadios1">Medium</label>
               </div>
               <div class="form-check mr-3">
                  <input 
                  class="form-check-input" 
                  type="radio" 
                  name="exampleRadios" 
                  id="exampleRadios1" 
                  value="high"
                  checked={this.state.priority ==="high"}
                  onChange={(event) => this.handleInput(event, 'priority')}/>
                  <label class="form-check-label" for="exampleRadios1">High</label>
               </div>
               </div>
               <button type="submit" class="btn btn-primary">Create Todo</button>
            </form>
         </div>
      );
   }
}

export default CreateTodo;