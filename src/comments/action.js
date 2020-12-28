export const addComment = (comment) => {
    return {
        type: "ADD_COMMENT",
        payload: comment
    }
}

export const deleteComment = (index) => {
    return {
        type: "DELETE_COMMENT",
        payload: index
    }
}