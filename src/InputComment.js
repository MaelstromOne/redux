import React from 'react'

export default (props) => {
    return (
        <form className={"input"} onSubmit={props.add}>
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label>Имя</label>
                <input type="text" name="name" value={props.name} onChange={props.chAuthor}/>
                <label>Комментарий</label>
                <textarea rows="10" cols="45" name="text" value={props.text} onChange={props.chText}/>
                <button className={"send"}>Отправить</button>
            </fieldset>
        </form>
    )
}