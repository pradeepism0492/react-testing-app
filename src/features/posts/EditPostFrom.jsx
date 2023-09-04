import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, selectPostById, updatePost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const EditPostFrom = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);
  console.log(post);
  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  //   if (!post) {
  //     return (

  //     );
  //   }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAutherChanged = (e) => setUserId(e.target.value);
  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.log("failed to save the post ", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.log("failed to delete the post ", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <>
      {post ? (
        <section>
          <h2>Edit Post</h2>
          <form>
            <form>
              <label htmlFor="postTitle">Post Title:</label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
              />
              <select
                name="postAuther"
                id="postAuher"
                value={userId}
                onChange={onAutherChanged}
              >
                <option value=""></option>
                {usersOptions}
              </select>
              <label htmlFor="postContent">Content:</label>
              <textarea
                name="postContent"
                id="postContent"
                value={content}
                onChange={onContentChanged}
              />
              <button
                type="button"
                onClick={onSavePostClicked}
                disabled={!canSave}
              >
                Save Post
              </button>
              <button
                className="deleteButton"
                type="button"
                onClick={onDeletePostClicked}
              >
                Delete Post
              </button>
            </form>
          </form>
        </section>
      ) : (
        <section>
          <h2>Post not found!</h2>
        </section>
      )}
    </>
  );
};

export default EditPostFrom;
