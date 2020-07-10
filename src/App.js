import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoBanner} from './ToDoBanner';
import {ToDoRow} from './ToDoRow';
import{ToDoCreator} from './ToDoCreator';
import {VisibilityControl} from './VisibiltyControl';

export default class App extends Component{
  //Above is a class called App that extends the functionality of teh component class.

  // export keyword makes the class available for use outside this file. (like an access modifier in c#)


constructor(){
  //We are going to create state data for our component. To do that, we need to create a constructor method.
  //this method  will get called when an object is created using this class. Said another way,
  //This method will be called when the component is initialized. 

  //To ensure that we have all the necessary  features from React to create a stateful component, we need to call a method called super()
  //This super() calls teh constructor for the component class in react.
  super();

  this.state = {
    userName: "dub",
    todoItems: [
      {action: "Get a jerb", done: false},
      {action: "pay bills", done: true},
      {action: "cook", done: false},
      {action: "finish course", done: false},
      {action: "sleep", done: true}
    ]
  }

}//end of constructor

// If the todo row component's "done" property experiences a change event (checking the done box in the UI) then the todorow component calls aq callback method called toggletodo.(below) and passes toggletodo the checked todo item.
todoTableRows = (isTaskDone) => this.state.todoItems.filter(x => x.done === isTaskDone).map(notCompleted => <ToDoRow key= {notCompleted.action} item = {notCompleted} callback = {this.toggleTodo} />)

// The toggleTodo method is invoked as a callback when  the ToDoRow component hads a change event to the "done" property
// .setState allows the data to be updated.
toggleTodo = (todo) => this.setState({
  todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done:!item.done} : item)
})

// mehtod below is the callback for the ToDoCreator compoennt
createNewTodoCallback= (newTask) => {
  if (!this.state.todoItems.find(x => x.action === this.state.newItemText))
  this.setState({
    // the spread operator{...} below expands the array of the todoItems and adds the new item to the array.

    todoItems: [...this.state.todoItems, {action: newTask, done: false}]
  },
  () => localStorage.setItem("todos", JSON.stringify(this.state)));
}

// the method below is a built in react method to handle logic for when the app "mounts"  or "loads"

 componentDidMount = () => {
   let data = localStorage.getItem("todos");
   this.setState(data != null ? JSON.parse(data) : {userName: "John", todo: [
     {action: "fish", done: false,},
     {action: "meet Jane", done: false},
     {action: "die", done: false}
     ],
     showCompleted: true
    });
 }

  // using '=>' (lambda) syntax the return is implied and the return keyword is not needed. The scope around the body of the function is also not needed.
  render = () => 
  <div>
    <ToDoBanner
      displayName = {this.state.userName}
      tasks = {this.state.todoItems}
    />
  
  {/*feature 5*/}
  <ToDoCreator
    callback = {this.createNewTodoCallback}
  />

  <table className = "table table-striped table-bordered">
    <thead>
      <tr>
        <th>Description</th>
        <th>done</th>
      </tr>
    </thead>
    <tbody>
      {this.todoTableRows(false)}
    </tbody>

  </table>
  <div className = "bg-secondary text-white text-center p-2">
    <VisibilityControl 
    description="Completed Tasks"
    isChecked={this.state.showCompleted}
    callback={checked => this.setState({showCompleted: checked})}
    />
  </div>
{this.state.showCompleted &&
  <table className = "table table-striped table-bordered">
    <thead>
      <tr>
        <th>Description</th>
        <th>done</th>
      </tr>
    </thead>
    <tbody>
      {this.todoTableRows(true)}
    </tbody>

  </table>
}
  </div>
};
