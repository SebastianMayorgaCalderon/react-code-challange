import React from 'react';
import { Container } from 'react-bootstrap';
import PostItem from './PostItem';

const PostsList = ({list}) => {
    const postsCards = list.map(post=><PostItem post={post}/>)
    return(
        <Container>
            {postsCards}
        </Container>
    );
};

export default PostsList;