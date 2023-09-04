import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddpostFrom from "./features/posts/AddpostFrom";
import PostsList from "./features/posts/PostsList";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostFrom from "./features/posts/EditPostFrom";
import UserList from "./features/users/UserList";
import UserPage from "./features/users/UserPage";
// import TodoLists from "./features/todo/TodoLists";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<TodoLists />} /> */}
        <Route  index element={<PostsList />}/>
        {/* <Route path="postList" element={<PostsList />}/> */}
        <Route path="post">  
          <Route index element={<AddpostFrom />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostFrom />} />
        </Route>

        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
         {/* Catch all - replace with 404 component if you want   */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>  
    </Routes>
  );
}

export default App;

// <div className="App">
//  {/* <Welcome name='pradeep Gupta'/> */}
//  {/* <Counter/> */}
//  {/* <AddpostFrom/>
//  <PostsList/> */}
// </div>
