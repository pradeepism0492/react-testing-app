import { useSelector } from "react-redux";
import PostAuther from "./PostAuther"
import ReactionButtons from "./ReactionButtons"
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";
import { selectPostById } from "./postsSlice";

const PostExcerpt = ({postId}) => {
  const post = useSelector(state=> selectPostById(state, postId));

  return (
    <article>
    <h3>{post.title}</h3>
    <p>{post.body.substring(0, 75)}...</p>
    <p className="postCredit">
      <Link to={`post/${post.id}`}>View Post</Link>
      <PostAuther userId={post.userId}/>
      <TimeAgo timestamp={post.date} />
    </p>
    <ReactionButtons post={post}/>
</article>
  )
}

export default PostExcerpt