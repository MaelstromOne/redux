import React from 'react'
import ReactDOM from 'react-dom'
import Comments from "./Comments"
import InputComment from "./InputComment";
import "./style.css";
import {connect, Provider} from "react-redux";
import {store} from "./init/store"


class Widget extends React.Component {
    render() {
        return (
            <div className={"fixed-container main"}>
                <Comments/>
                <InputComment/>
            </div>
        )
    }
}

Widget = connect()(Widget);

ReactDOM.render(
    <Provider store={store}>
        <Widget/>
    </Provider>,
    document.querySelector('#app')
)