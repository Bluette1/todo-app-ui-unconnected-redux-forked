import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map(todo => <Todo key={`todo-${todo.id}`} todo={todo} />)
      : 'No todos, yay!'}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TodoList);
