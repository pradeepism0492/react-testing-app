import React from 'react'
import PostAuther from './PostAuther'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import { Link, useParams } from 'react-router-dom'


const SinglePostPage = () => {
  const {postId} = useParams();
     const post = useSelector(state=> selectPostById(state, Number(postId)));
     
  return (
    <article>
      {post ?
      <>
          <h3>{post?.title}</h3>
    <p>{post?.body.substring(0, 100)}</p>
    <p className="postCredit">
      <Link to={`/post/edit/${post?.id}`}>Edit Post</Link>
      <PostAuther userId={post?.userId}/>
      <TimeAgo timestamp={post?.date} />
    </p>
    <ReactionButtons post={post}/>
      </> : <p>No found</p>}

</article>
  )
}

export default SinglePostPage