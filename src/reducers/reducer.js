import {
    combineReducers
} from "redux"
import TodosReducer from "./TodosReducer"
const reducer = combineReducers({
    todos: TodosReducer
})

export default reducer;