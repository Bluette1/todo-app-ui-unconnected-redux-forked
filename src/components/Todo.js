import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo } from '../redux/actions';

const Todo = ({ todo, toggleTodo }) => (
  <li
    className="todo-this.props.todoitem"
    aria-hidden="true"
    onClick={() => toggleTodo(todo.id)}
    onKeyDown={() => toggleTodo(todo.id)}
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

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default connect(
  null,
  { toggleTodo },
)(Todo);
