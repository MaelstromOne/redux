// const initialState = [
//     {
//         author: "name",
//         text: "text",
//         timestamp: new Date().toLocaleString()
//     },
//     {
//         author: "name2",
//         text: "text2",
//         timestamp: new Date().toLocaleString()
//     }
// ]

const COMMENTS = "comments";

export function save(comments) {
    localStorage.setItem(COMMENTS, JSON.stringify(comments))
}

function load() {
    return JSON.parse(localStorage.getItem(COMMENTS)) || []
}

const initialState = load();

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.payload];
        case "DELETE_COMMENT":
            return [...state].filter((_, i) => i !== action.payload);
        default:
            return [...state];
    }
}

