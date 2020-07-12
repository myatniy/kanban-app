import React, {Component} from 'react';
import "./css/item-status-filter.css";

export default class TodoListFilter extends Component {

  render() {
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
    )
  }
}