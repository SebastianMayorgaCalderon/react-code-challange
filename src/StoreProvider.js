
import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { PostReducer, CommentReducer } from './reducers';

const StoreProvider = (props) =>{
    const store = createStore(combineReducers({
        PostReducer,
        CommentReducer
    }));
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default StoreProvider;