import { HiPlus, HiPencil, HiTrash, HiCheckCircle } from "react-icons/hi";
import { MdUnpublished } from "react-icons/md";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  return (
    <div className="flex mt-16">
      <div className="flex-1 p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Manage Blogs 🅱️</h1>
          <Link to={"/admin/create"}>
           <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md cursor-pointer">
            <HiPlus className="w-5 h-5" />
            Add Blog
          </button></Link>
         
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">All Blogs</h2>
            <p className="text-gray-600 mt-1">
              Manage and monitor your blog posts
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold text-sm">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold text-sm">
                    Blog Title
                  </th>

                  <th scope="col" className="px-6 py-4 font-semibold text-sm">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      Silver Blog Post
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <HiCheckCircle className="w-4 h-4 mr-1" />
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 border border-yellow-300 rounded-md text-yellow-700 hover:bg-yellow-100 transition duration-150 text-xs font-medium cursor-pointer">
                        <HiPencil className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-red-100 transition duration-150 text-xs font-medium cursor-pointer">
                        <HiTrash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      Silver Blog Post
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <MdUnpublished className="w-4 h-4 mr-1" />
                      Unpublished
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 border border-yellow-300 rounded-md text-yellow-700 hover:bg-yellow-100 transition duration-150 text-xs font-medium cursor-pointer">
                        <HiPencil className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-red-100 transition duration-150 text-xs font-medium cursor-pointer">
                        <HiTrash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
