import {
    fetch
} from "cross-fetch"

export const RECEIVE_ALL_TODOS = (data) => ({
    type: "RECEIVE_ALL_TODOS",
    todos: data
})

export const REQUEST_ALL_TODOS_ERROR = () => ({
    type: "REQUEST_ALL_TODOS_ERROR"
})

export const START_REQUEST_ALL_TODOS = () => ({
    type: "START_REQUEST_ALL_TODOS"
})


export const TOGGLE_TODO = (id) => ({
    type: "TOGGLE_TODO"
})


export const REQUEST_ALL_TODOS = () => {

    return function (dispatch) {
        dispatch(START_REQUEST_ALL_TODOS());
        return fetch("http://localhost:8080/alldata")
            .then((res) => res.json(),(error)=>{console.log("发生网络错误",error)})
            .then((data) => {
                if (data) {
                    dispatch(RECEIVE_ALL_TODOS(data))
                } else {
                    dispatch(REQUEST_ALL_TODOS_ERROR())
                }
            })
    }
}