import React, {useState} from 'react';
import { Row, Col, Card, Button, InputGroup,FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CommentItem from './CommentItem'
import { CommentActions } from '../actions/index';


const AddComment = ({post}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        email:'',
        name: '',
        body: '',
        postId: post.id
    });
    const onAddComment = () => {
        dispatch(CommentActions.actions.addComment(value))
        setValue({
            email:'',
            name: '',
            body: '',
            postId: post.id
        });
    }

    return (
        <Row>
            <Col>
                <Card>
                <Card.Body>
                    <Card.Title>Add a comment!</Card.Title>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        value={value.email}
                        onChange={(e)=>{setValue({...value, email: e.target.value})}}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            value={value.name}
                            onChange={(e)=>{setValue({...value, name: e.target.value})}}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Body</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            as="textarea" 
                            aria-label="With textarea" 
                            value={value.body}
                            onChange={(e)=>{setValue({...value, body: e.target.value})}}
                            />
                    </InputGroup>
                    <Button variant="primary"  disabled={value.name=== '' || value.email === '' || value.body === ''}
                            onClick={()=>onAddComment()}>
                                Add
                        </Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

const PostItem = ({post}) => {
    const {comments, addedComments} = useSelector(data=>data.CommentReducer)
    const addedPostComments = addedComments.filter(comment => comment.postId === post.id);
    const postsComments = comments.filter(comment => comment.postId === post.id);
    const addedPostsToDisplay = addedPostComments.map(comment=> <CommentItem comment={comment}/>)
    const commentsToDisplay = postsComments.map(comment=> <CommentItem comment={comment}/>)
    const [showComments, setShowComments] = useState(false)
    
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                        <Button variant="primary" 
                            onClick={()=>setShowComments(!showComments)}>
                            {showComments? 'ShowLess': 'Show More'}
                        </Button>
                        {showComments? [...commentsToDisplay, ...addedPostsToDisplay, <AddComment post={post}/>] : null}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default PostItem;