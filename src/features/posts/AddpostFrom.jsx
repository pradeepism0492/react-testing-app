import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  addNewPost  } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';
import { useNavigate } from 'react-router-dom';

const AddpostFrom = () => {
    const [title, setTtile] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');
    
    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTtile(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAutherChanged = e => setUserId(e.target.value);

    const dispatch = useDispatch();
    const canSave = [title, content, userId].every(Boolean)&& addRequestStatus === 'idle';
    const navigate = useNavigate();
    const onSavePostClicked = () => {
        if(canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({title, body: content, userId})).unwrap()
                setTtile('');
                setContent('');
                setUserId('');
                navigate('/')
                
            } catch (err) {

                console.log('failed to save the post ', err)
            } finally{
                setAddRequestStatus('idle')

            }

            // dispatch(
            //     postAdded(title,content, userId)
            // );
            // setTtile('');
            // setContent('');
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ));
  return (
    <section>
        <h2>Add a New Post</h2>
        <form  className='post-form'>

            <label htmlFor="postTitle">Post Title:</label>
            <input 
                type="text"
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
            />
            <select name="postAuther" id="postAuher" value={userId} 
            onChange={onAutherChanged}>
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
            <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
    </section>
  )
}

export default AddpostFrom