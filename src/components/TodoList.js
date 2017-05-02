import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
    <ul>
      {todos.map(todo =>
          <Todo
              key={todo.id}
              {...todo}
          />
      )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

export default TodoList
