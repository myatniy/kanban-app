import React, {Component} from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  state = {
    isCrossedOut: false,
    isImportant: false
  };

  onListItemValueClick = () => {
    this.setState(({isCrossedOut}) => {
      return {
        isCrossedOut: !isCrossedOut
      };
    });
  }

  onImportantButtonClick = () => {
    // this.setState({
    //   isImportant: !this.state.isImportant
    // })
    this.setState(({isImportant}) => {
      return {
        isImportant: !isImportant
      };
    });
  }

  render() {
    const {value, onDeleted} = this.props;
    const {isCrossedOut, isImportant} = this.state;

    let listItemValueClassName = isCrossedOut ? ["li-value", "crossed-out"] : ["li-value"];
    let listItemParentClassName = isImportant ? ["li-style", "important"] : ["li-style"];

    return (
      <li 
        className={listItemParentClassName.join(" ")}
      >
        <span className={listItemValueClassName.join(" ")}
          onClick={this.onListItemValueClick}
        >
          {value}
        </span>
        <div className="btn-container">
          <button onClick={onDeleted}>Del</button>
          <button className="btn-important" onClick={this.onImportantButtonClick}>!</button>
        </div>
      </li>
    );
  }
}
