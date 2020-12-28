export const changeAuthor = (author) => {
    return {
        type: "CHANGE_AUTHOR",
        payload: author
    }
}

export const changeText = (text) => {
    return {
        type: "CHANGE_TEXT",
        payload: text
    }
}