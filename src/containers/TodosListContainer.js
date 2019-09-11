import TodoList from "../components/TodosList"
import {connect} from "react-redux"
import {TOGGLE_TODO} from "../actions/index" 
const mapStateToProps = (state) => ({
    todos:state.todos
})

const mapDispatchToProps = (dispatch)=>{
    return {
        handleClick:(id)=>{
            dispatch(TOGGLE_TODO(id))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
