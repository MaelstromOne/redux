import React from 'react'

export default class Comments extends React.Component {
    render() {
        return (
            <form className={"input"} onSubmit={this.props.add}>
                <fieldset>
                    <legend>Добавить комментарий</legend>
                    <label>Имя</label>
                    <input type="text" name="name" value={this.props.name} onChange={this.props.chAuthor}/>
                    <label>Комментарий</label>
                    <textarea rows="10" cols="45" name="text" value={this.props.text} onChange={this.props.chText}/>
                    <button className={"send"}>Отправить</button>
                </fieldset>
            </form>
        )
    }
}