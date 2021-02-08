const CommentActions = {
    actionsTypes: {
        ADD_COMMENT: 'Comment/ADD_COMMENT',
        SET_COMMENTS: 'Comment/SET_COMMENTS'
    },
    actions: {
        addComment: (comment) => {
            return {
                type: CommentActions.actionsTypes.ADD_COMMENT,
                payload: comment
            };
        },
        setComments: (comments) => {
            return {
                type: CommentActions.actionsTypes.SET_COMMENTS,
                payload: comments
            };
        },
    },
};

export default CommentActions