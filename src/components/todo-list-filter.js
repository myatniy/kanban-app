import React, {Component} from 'react';
import "./css/todo-list-filter.css";

export default class TodoListFilter extends Component {
  buttons = [
    {value: "all", label: "All"},
    {value: "active", label: "Active"},
    {value: "done", label: "Done"}
  ];

  render() {
    const btn = this.buttons.map(({value, label}) => <button type="button" value={value}>{label}</button>);

    return (
      <div className="btn-group">
        <button type="button" id="btn-all">
          All
        </button>
        <button type="button" id="btn-active">
          Active
        </button>
        <button type="button" id="btn-done">
          Done
        </button>
      </div>
    );
  }
}