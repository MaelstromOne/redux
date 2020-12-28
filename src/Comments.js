import React from 'react'
import Comment from "./Comment";
import {deleteComment} from "./comments/action";
import {useDispatch, useSelector} from "react-redux";

export default () => {
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();

    function del(index) {
        dispatch(deleteComment(index))
    }

    return (
        <div className="comments">
            {comments.map((comment, index) => {
                return <Comment
                    id={index}
                    key={index}
                    author={comment.author}
                    text={comment.text}
                    timestamp={comment.timestamp}
                    del={del}
                />
            })}
        </div>
    )
}