import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addComment} from "./comments/action";

export default () => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const add = (event) => {
        event.preventDefault()

        const comment = {
            author: author,
            text: text,
            timestamp: new Date().toLocaleString()
        }

        dispatch(addComment(comment));

        setAuthor("");
        setText("");
    }

    return (
        <form className="input" onSubmit={add}>
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label>Имя</label>
                <input type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)}/>
                <label>Комментарий</label>
                <textarea rows="5" cols="45" name="text" value={text} onChange={e => setText(e.target.value)}/>
                <button className="send">Отправить</button>
            </fieldset>
        </form>
    )
}