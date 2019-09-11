import App from "./app";
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import reducer from "./reducers/reducer";
import  {REQUEST_ALL_TODOS} from "./actions/index"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)

store.dispatch(REQUEST_ALL_TODOS()).then(()=>{
    console.log(store.getState())
})

render(
    <Provider store={store}>
        <App></App>
    </Provider>
,document.getElementById("root"))