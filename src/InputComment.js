import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeAuthor, changeText} from "./form/action";
import {addComment} from "./comments/action";

export default () => {
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

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
        <form className="input" onSubmit={add}>
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label>Имя</label>
                <input type="text" name="author" value={form.author} onChange={chAuthor}/>
                <label>Комментарий</label>
                <textarea rows="5" cols="45" name="text" value={form.text} onChange={chText}/>
                <button className="send">Отправить</button>
            </fieldset>
        </form>
    )
}