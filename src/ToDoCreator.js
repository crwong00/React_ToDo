import React, {Component} from 'react';

export class ToDoCreator extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.state = {newItemText: ""}
    }//end of constructor

    // method for the onchange of the input box
    updateNewTextValue= (event) => {
        this.setState({newItemText:event.target.value});
    }

    //method for the onClick for the add button
    createNewTodo= () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""})
    }

    render = () => 
    <div className = "my-1">
        <input className = "form-control" value = {this.state.newItemText} onChange={this.updateNewTextValue}></input>
        <button className="btn btn-danger mt-1" onClick={this.createNewTodo}>Add</button>
    </div>

}//end of class