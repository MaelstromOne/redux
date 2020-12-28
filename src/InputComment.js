import React from 'react'

export default (props) => {
    return (
        <form className="input" onSubmit={props.add}>
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label>Имя</label>
                <input type="text" name="author" value={props.author} onChange={e => {props.dispatch({
                    type: "CHANGE_AUTHOR",
                    payload: e.target.value
                })
                }}/>
                <label>Комментарий</label>
                <textarea rows="5" cols="45" name="text" value={props.text} onChange={e => {props.dispatch({
                    type: "CHANGE_TEXT",
                    payload: e.target.value
                })
                }}/>
                <button className="send">Отправить</button>
            </fieldset>
        </form>
    )
}