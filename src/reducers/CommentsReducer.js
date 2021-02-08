import { CommentActions } from "../actions";

const initialState = {
    comments: [],
    addedComments: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CommentActions.actionsTypes.ADD_COMMENT: 
            return { 
                ...state, 
                addedComments: [...state.addedComments, action.payload] 
            };
        case CommentActions.actionsTypes.SET_COMMENTS:
            return { 
                ...state, 
                comments: action.payload 
            };
        default:
            return state;
    };
};

export default reducer;