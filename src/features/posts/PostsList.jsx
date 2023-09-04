import {  useSelector } from 'react-redux'
import {  getPostsError, getPostsStatus, selectPostIds } from './postsSlice';

import PostExcerpt from './PostExcerpt';

const PostsList = () => {

    // const posts = useSelector(selectAllPosts);
    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    console.log(orderedPostIds);
    
    let content;
    if(postStatus === 'loading') {
      content = <p>"Loading ...."</p>
    }else if (postStatus === 'succeeded'){
      // const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date)); 
      content = orderedPostIds.map((postId, index)=> (<PostExcerpt  key={postId + index}  postId={postId} />));
    }else if (postStatus === 'failed'){
      content = <p>{error}</p>
    }

  return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default PostsList