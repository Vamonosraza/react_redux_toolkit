import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UserList from "./features/users/UserList";
import UserPage from "./features/users/UserPage";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user"> {/*create this route to display the users list*/}
          <Route index element={<UserList/>}/>
          <Route path=":userId" element={<UserPage/>}/>{/*create this route to display the user page if it has the user id*/}
        </Route>

        {/*create this route to display the 404 page*/}
        <Route path="*" element={<Navigate to="/" replace/>}/> {/*catch all routes and redirect them to the home page*/}

      </Route>
    </Routes>
  );
}

export default App;
