import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// stateをPropに伝える store -> view
const mapStateToPtops = (state) => {
    return {
        todos: state.todos
    }
}

// action(toggleTodo)の変更内容をstoreに適用する view -> store
//const mapDispatchToProps = (dispatch) => {
//    retrn {
//        onTodoClick: (id) => {
//            dispatch(toggleTodo(id))
//        }
//    }
//}

// このクラスとかのcontainerないで、reduxとcomponentをつなぎ込んで行く感じ
// 基本的には、containerでmapStateToPtops, mapDispatchToPropsを定義して、
// conponentのpropに渡すのが基本パターンになると思う。

// sotreのdispatchとかで、storeが変更されるとmapStateToProps
// が走ってstoreの内容が、componentのpropに適用される。
// んで、reactが差分検知して描画するという感じ

// http://qiita.com/erukiti/items/e16aa13ad81d5938374e?utm_campaign=popular_items&utm_medium=referral&utm_source=popular_items#container
const VisibleTodoList = connect(
    mapStateToPtops
)(TodoList)

export default VisibleTodoList

