import React, {Component} from 'react';

export class ToDoBanner extends Component{
  render = () =>
  <h4 className = "bg-primary text-white text-center p-2">
    {this.props.displayName}'s to do list ({this.props.tasks.filter(task => !task.done).length} left.)

  </h4>
}