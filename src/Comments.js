import React from 'react'
import Comment from "./Comment";
import {deleteComment} from "./comments/action";
import {connect} from "react-redux";

class Comments extends React.Component {
    render() {
        return (
            <div className={"comments"}>
                {this.props.comments.map((comment, index) => {
                    return <Comment
                        key={index}
                        author={comment.author}
                        text={comment.text}
                        timestamp={comment.timestamp}
                        delete={this.props.delete.bind(this, index)}
                    />
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (i) => dispatch(deleteComment(i)),
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Comments);