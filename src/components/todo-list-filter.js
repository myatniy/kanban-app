import React, {Component} from 'react';
import "./css/todo-list-filter.css";

export default class TodoListFilter extends Component {
  buttons = [
    {value: "all", label: "All"},
    {value: "active", label: "Active"},
    {value: "done", label: "Done"}
  ];

  render() {
    const {filterQuery, onFilterQueryChanged} = this.props;
    const buttons = this.buttons.map(
      ({value, label}) => {
        const isActive = filterQuery === value;
        const isActiveCSS = isActive ? "btn-active" : null;

        return <button 
          className={isActiveCSS} 
          type="button" 
          value={value} 
          key={value}
          onClick={() => onFilterQueryChanged(value)}
        >
          {label}
        </button>;
      }
    );

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}