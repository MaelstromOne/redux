import React from 'react'
import Comment from "./Comment";

export default class Comments extends React.Component {
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