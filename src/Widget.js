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
                <Comments
                    comments={this.props.comments}
                    delete={this.props.delete}
                />
                <InputComment
                    name={this.props.form.author}
                    text={this.props.form.text}
                    changeAuthor={this.props.changeAuthor}
                    changeText={this.props.changeText}
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
            dispatch({
                type: "ADD_COMMENT",
                payload: comment
            })

        },
        delete: (i) => dispatch({type: "DELETE_COMMENT", payload: i}),
        changeAuthor: (e) => dispatch({type: "CHANGE_AUTHOR", payload: e.target.value}),
        changeText: (e) => dispatch({type: "CHANGE_TEXT", payload: e.target.value}),
    }
}

Widget = connect(mapStateToProps, mapDispatchToProps)(Widget);

ReactDOM.render(
    <Provider store={store}>
        <Widget/>
    </Provider>,
    document.querySelector('#app')
)