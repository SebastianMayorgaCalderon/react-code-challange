
const PostsActions = {
    actionsTypes: {
        SET_POSTS: 'Post/SET_POSTS',
    },
    actions:{ 
        setPosts: (posts) => {
            return {
                type: PostsActions.actionsTypes.SET_POSTS,
                payload: posts
            };
        },
    }
};


export default PostsActions;