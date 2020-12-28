import React, {useState, useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom'
import InputComment from "./InputComment";
import "./style.css";
import Comments from "./Comments";
import {store} from "./init/store"
import {connect, Provider, useDispatch, useSelector} from "react-redux";

function Widget() {
    const comments = useSelector(state => state.comments);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    function deleteComment(index) {
        dispatch({
            type: "DELETE_COMMENT",
            payload: index
        })
    }

    const addComment = (event) => {
        event.preventDefault()

        const comment = {
            author: form.author,
            text: form.text,
            timestamp: new Date().toLocaleString()
        }

        dispatch({
            type: "ADD_COMMENT",
            payload: comment
        })

        dispatch({
            type: "CLEAR"
        })
    }

    return (
        <div className="fixed-container main">
            <Comments
                comments={comments}
                delete={deleteComment}
            />
            <InputComment
                author={form.author}
                text={form.text}
                dispatch={dispatch}
                add={addComment}
            />
        </div>
    )

}

// function mapStateToProps(state) {
//     return {
//         counter: state.counter1.counter
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         onAdd: () => dispatch(add()),
//         onSub: () => dispatch(sub()),
//         onAddNumber: number => dispatch(addNumber(number)),
//         onAsyncAdd: number => dispatch(asyncAdd(number))
//     }
// }
//
// Widget = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Widget);

ReactDOM.render(
    <Provider store={store}>
        <Widget/>
    </Provider>,
    document.querySelector('#app')
)