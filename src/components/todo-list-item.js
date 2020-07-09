import React, {Component} from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  state = {
    isCrossedOut: false,
    isImportant: false
  };

  onListItemValueClick = () => {
    this.setState({
      isCrossedOut: !this.state.isCrossedOut
    })
  };

  onImportantButtonClick = () => {
    this.setState({
      isImportant: !this.state.isImportant
    })
  }

  render() {
    const {value} = this.props;
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
          <button>Del</button>
          <button className="btn-important" onClick={this.onImportantButtonClick}>!</button>
        </div>
      </li>
    );
  }
}

// const TodoListItem = ({value, isImportant}) => {
//   const applyIsImportant = (isImportant) => isImportant ? "important" : null;

//   return (
//     <li 
//       // key={id}
//       className={`li-style ${applyIsImportant(isImportant)}`}
//     >
//       <span className="li-value">{value}</span>
//       <div className="btn-container">
//         <button>Del</button>
//         <button>!</button>
//       </div>
//     </li>
//   );
// }

// export default TodoListItem;