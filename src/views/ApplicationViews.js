import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { PostContainer } from "../components/posts/postContainer"
import { Authorized } from "./Authorized"
import { CategoryForm } from "../components/categories/CategoryForm"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route path="/categories" element={<CategoryList setToken={setToken} />} />
      <Route path="/create-category" element={<CategoryForm setToken={setToken} />} />
      <Route path="/posts" element={<PostContainer setToken={setToken} />} />
      <Route path="/tags" element={<Tags setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}

      </Route>
    </Routes>
  </>
}
