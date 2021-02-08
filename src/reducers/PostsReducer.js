import { PostsActions } from '../actions';

const initialState = {
    posts: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case PostsActions.actionsTypes.SET_POSTS:
            return { 
                ...state, 
                posts: action.payload 
            };
        default:
            return state;
    };
};

export default reducer;