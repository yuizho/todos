import undoable from 'redux-undo'

const todo = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            completed: false
        }
    default:
        return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            todo(undefined, action)
        ]
    default:
        return state
    }    
}

const undoableTodos = undoable(todos)

export default undoableTodos
