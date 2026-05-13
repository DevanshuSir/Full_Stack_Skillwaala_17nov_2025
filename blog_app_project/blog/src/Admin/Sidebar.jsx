import { Link } from "react-router-dom"
import { IoMdExit } from "react-icons/io";


const Sidebar = () => {



  return (
    <div className="w-60 bg-gray-700 text-white p-5 mt-16 ">
      <h2 className="text-2xl font-bold mb-6">Admin Penal</h2>
      <ul className="space-y-6">
        <li className=" hover:text-blue-500  "><Link to={"/admin"}>Dashboard</Link></li>
        <li className="hover:text-blue-500"><Link to={"/admin/blogs"}>Manage Blogs</Link></li>
        <li className="hover:text-blue-500 "><Link to={"/admin/comments"}>Comments</Link></li>
        <li className="hover:text-blue-500 "><Link>Exit
        <IoMdExit className="inline ms-1 text-xl text-red-500"/>
        </Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
