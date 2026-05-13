import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BlogDetails from "./pages/BlogDetails"
import AdminLogin from "./Admin/AdminLogin"
import AdminLayout from "./Admin/AdminLayout"
import Dashboard from "./Admin/Dashboard"
import AllBlogs from "./Admin/AllBlogs"
import CreateBlog from "./Admin/CreateBlog"
import "quill/dist/quill.snow.css"
import Comments from "./Admin/Comments"

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog-details" element={<BlogDetails/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/admin"
      element={
        <AdminLayout>
          <Dashboard/>
        </AdminLayout>
      }
      />
      <Route path="/admin/blogs"
      element={
        <AdminLayout>
          <AllBlogs/>
        </AdminLayout>
      }
      />

      <Route path="/admin/create"
      element={
        <AdminLayout>
          <CreateBlog/>
        </AdminLayout>
      }/>

       <Route path="/admin/comments"
      element={
        <AdminLayout>
         <Comments/>
        </AdminLayout>
      }/>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
