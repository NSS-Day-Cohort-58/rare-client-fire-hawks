import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Tags } from "../components/tags/tagManagement"
import { Category } from "../components/categories/Category"
import { PostContainer } from "../components/posts/postContainer"
import { Authorized } from "./Authorized"
import { CategoryForm } from "../components/categories/CategoryForm"
import { User } from "../components/users/user"
import { Users } from "../components/users/users"
import { PostDetails } from "../components/posts/postDetails"
import { TagForm } from "../components/tags/tagForm"
import { CategoryList } from "../components/categories/CategoryList"
import { MyPosts } from "../components/posts/myPosts"
import { UserDetails } from "../components/users/userDetails"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route path="/my-posts" element={<MyPosts setToken={setToken} />} />
      <Route path="/create-category" element={<CategoryForm setToken={setToken} />} />
      <Route path="/posts" element={<PostContainer setToken={setToken} />} />
      <Route path="/categories" element={<CategoryList setToken={setToken} />} />
      <Route path="posts/:postId" element={<PostDetails />} />
      <Route path="users/:userId" element={<UserDetails />} />
      <Route path="/tags" element={<Tags setToken={setToken} />} />
      <Route path="/user-list" element={<Users setToken={setToken} />} />
      <Route path="/create-tag" element={<TagForm setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}

      </Route>
    </Routes>
  </>
}
