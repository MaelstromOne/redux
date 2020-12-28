import React from 'react'
import ReactDOM from 'react-dom'
import Comments from "./Comments"
import InputComment from "./InputComment";
import "./style.css";
import {connect, Provider} from "react-redux";
import {store} from "./init/store"
import {addComment, deleteComment} from "./comments/action"
import {changeAuthor, changeText} from "./form/action"


class Widget extends React.Component {

    render() {
        return (
            <div className={"fixed-container main"}>
                <Comments
                    comments={this.props.comments}
                    delete={this.props.delete}
                />
                <InputComment
                    name={this.props.form.author}
                    text={this.props.form.text}
                    chAuthor={this.props.chAuthor}
                    chText={this.props.chText}
                    add={this.props.add}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
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
        delete: (i) => dispatch(deleteComment(i)),
        chAuthor: (e) => dispatch(changeAuthor(e.target.value)),
        chText: (e) => dispatch(changeText(e.target.value)),
    }
}

Widget = connect(mapStateToProps, mapDispatchToProps)(Widget);

ReactDOM.render(
    <Provider store={store}>
        <Widget/>
    </Provider>,
    document.querySelector('#app')
)