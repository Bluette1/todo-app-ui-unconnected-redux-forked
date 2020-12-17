import React from 'react';
import cx from 'classnames';
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

  class Todo extends React.Component {
    render() {
      const todo = this.props.todo;
      return (<li
      className="todo-his.props.todoitem"
      onClick={() => this.props.toggleTodo(todo.id)/** dispatches action to toggle todo */}
    >
      {todo && todo.completed ? '👌' : '👋'}
      {' '}
      <span
        className={cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed',
        )}
      >
        {todo.content}
      </span>
    </li>
  );
    }
  }

export default connect(
  null,
  {toggleTodo}
)(Todo);