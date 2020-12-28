import React from 'react'
import ReactDOM from 'react-dom'
import InputComment from "./InputComment";
import "./style.css";
import Comments from "./Comments";
import {store} from "./init/store"
import {Provider} from "react-redux";

function Widget() {
    return (
        <div className="fixed-container main">
            <Comments/>
            <InputComment/>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Widget/>
    </Provider>,
    document.querySelector('#app')
)