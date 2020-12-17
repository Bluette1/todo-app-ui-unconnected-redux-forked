import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    const { props: { addTodo } } = this;
    const { state: { input } } = this;
    addTodo(input);
    // sets state back to empty string
    this.setState({ input: '' });
  };

  render() {
    const { state: { input } } = this;
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={input}
        />
        <button type="button" className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addTodo },
)(AddTodo);
