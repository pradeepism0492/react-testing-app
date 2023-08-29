import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuther = ({userId}) => {
    const users = useSelector(selectAllUsers);
    const auther = users.find(user => user.id === userId);
    
  return (
    <span>By {auther ? auther.name : 'Unknown author'}</span>
  )
}

export default PostAuther