import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostsActions, CommentActions } from './actions';
import { postsService, commentService } from './services';
import PostsList from './components/PostsList';
function App() {
  const dispatch = useDispatch();
  const {posts} = useSelector(data=>data.PostReducer)
  const {comments} = useSelector(data=>data.CommentReducer)
  useEffect(()=>{
    if(posts.length === 0){
      postsService.getPosts((res) => {
        dispatch(PostsActions.actions.setPosts(res.data))
      })
    }
    if(comments.length ===0) {
      commentService.getComments((res) => {
        dispatch(CommentActions.actions.setComments(res.data))
      })
    }
  })
  
  return (
    <div className="App">
      <PostsList list={posts}/>
    </div>
  );
}

export default App;
