import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  //Above is a class called App that extends the functionality of teh component class.

  // export keyword makes the class available for use outside this file. (like an access modifier in c#)


constructor(){
  //WE are going to create state data for our component. To do that, we need to create a constructor method.
  //this method  will get called when an object is created using this class. Said another way,
  //This method will be called when the component is initialized. 

  //To ensure that we have all the necessary  features from React to create a stateful component, we need to cal a method called super()
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

  // using '=>' (lambda) syntax the return is implied and the return keyword is not needed. The scope around the body of the function is also not needed.
  render = () => 
  <div>
    <ToDoBanner
      displayName = {this.state.userName}
      tasks = {this.state.todoItems}
    />
  </div>
};

export class ToDoBanner extends Component{
  render = () =>
  <h4 className = "bg-primary text-white text-center p-2">
    {this.props.displayName}'s to do list ({this.props.tasks.filter(task => !task.done).length} left.)

  </h4>
}