import React, { PropTypes } from 'react'

const Todo = ({ completed, text }) => (
  <li>
    {text}
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
