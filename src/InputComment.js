import React from 'react'
import {store} from "./init/store";
import {addComment} from "./comments/action";
import {changeAuthor, changeText} from "./form/action";
import {connect} from "react-redux";

class Comments extends React.Component {
    render() {
        return (
            <form className={"input"} onSubmit={this.props.add}>
                <fieldset>
                    <legend>Добавить комментарий</legend>
                    <label>Имя</label>
                    <input type="text" name="name" value={this.props.form.author} onChange={this.props.chAuthor}/>
                    <label>Комментарий</label>
                    <textarea rows="10" cols="45" name="text" value={this.props.form.text} onChange={this.props.chText}/>
                    <button className={"send"}>Отправить</button>
                </fieldset>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (e) => {
            e.preventDefault();

            const comment = {
                author: store.getState().form.author,
                text: store.getState().form.text,
                timestamp: new Date().toLocaleString()
            }

            dispatch(addComment(comment))
        },
        chAuthor: (e) => dispatch(changeAuthor(e.target.value)),
        chText: (e) => dispatch(changeText(e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);