import React from 'react'
import ReactDOM from 'react-dom'
import InputComment from "./InputComment";
import "./style.css";
import Comments from "./Comments";
import {store} from "./init/store"
import {addComment, deleteComment} from "./comments/action"
import {changeAuthor, changeText} from "./form/action"
import {Provider, useDispatch, useSelector} from "react-redux";

function Widget() {
    const comments = useSelector(state => state.comments);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    function del(index) {
        dispatch(deleteComment(index))
    }

    const add = (event) => {
        event.preventDefault()

        const comment = {
            author: form.author,
            text: form.text,
            timestamp: new Date().toLocaleString()
        }

        dispatch(addComment(comment));
    }

    const chAuthor = (event) => {
        dispatch(changeAuthor(event.target.value))
    }

    const chText = (event) => {
        dispatch(changeText(event.target.value))
    }

    return (
        <div className="fixed-container main">
            <Comments
                comments={comments}
                del={del}
            />
            <InputComment
                author={form.author}
                text={form.text}
                chAuthor={chAuthor}
                chText={chText}
                add={add}
            />
        </div>
    )

}

ReactDOM.render(
    <Provider store={store}>
        <Widget/>
    </Provider>,
    document.querySelector('#app')
)