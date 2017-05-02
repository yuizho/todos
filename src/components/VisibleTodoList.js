import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// stateをPropに伝える感じ store->view?
const mapStateToPtops = (state) => {
    return {
        todos: state.todos
    }
}

// action(toggleTodo)の変更内容をstoreに適用する view -> store?
//const mapDispatchToProps = (dispatch) => {
//    retrn {
//        onTodoClick: (id) => {
//            dispatch(toggleTodo(id))
//        }
//    }
//}

const VisibleTodoList = connect(
    mapStateToPtops
)(TodoList)

export default VisibleTodoList

