const initialState = {
    author: "",
    text: "",
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLEAR":
            return {
                author: "",
                text: ""
            }
        case "CHANGE_AUTHOR":
            return {
                ...state,
                author: action.payload
            };
        case "CHANGE_TEXT":
            return {
                ...state,
                text: action.payload
            };
        default:
            return {...state};
    }
}
