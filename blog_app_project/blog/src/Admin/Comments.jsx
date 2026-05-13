import { useState } from "react"
import { FaTrash } from "react-icons/fa";


const blogComments = [
  {
    id: 1,
    blog: "Introduction to JavaScript",
    username: "Rahul Sharma",
    comment: "Great explanation for beginners. I finally understood variables and functions clearly.",
    commentDate: "2026-05-10",
    approve: true
  },
  {
    id: 2,
    blog: "Introduction to JavaScript",
    username: "Priya Verma",
    comment: "Very helpful blog. Please add more examples on arrays and objects.",
    commentDate: "2026-05-11",
    approve: false
  }
];

const Comments = () => {
      const [activeTab,setActiveTab] = useState("approved")

      const filteredComments = blogComments.filter((data)=>
    activeTab === "approved" ? data.approve : !data.approve
    )

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-16">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl text-gray-800 font-semibold">Comments</h1>
            {/* Tabes */}

            <div className="flex gap-4">
                <button
                 className={`px-5 py-1 rounded-full border cursor-pointer ${
                    activeTab === "approved"?
                    "border-blue-500 text-blue-600":
                    "border-gray-400 text-gray-500"
                 }`}
                 onClick={()=>{setActiveTab("approved")}}
                >
                    Approved
                </button>

                 <button
                 className={`px-5 py-1 rounded-full border cursor-pointer ${
                    activeTab === "notApproved"?
                    "border-blue-500 text-blue-600":
                    "border-gray-400 text-gray-500"
                 }`}
                 onClick={()=>{setActiveTab("notApproved")}}
                >
                   Not Approved
                </button>
            </div>

           

        </div>
        {/* Table Container */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Table Head */}
        <div className="grid grid-cols-2 font-semibold text-gray-600 mb-4 ">
          <p>BLOG TITLE & COMMENT</p>
          <p className="text-right">ACTION</p>
        </div>

        {/* Comments List */}
        <div className="space-y-6 ">
          {filteredComments.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 items-start border border-gray-300 p-5 rounded-2xl"
            >
              {/* Blog + Comment */}
              <div c>
                <p className="font-medium">Blog : {item.blog}</p>

                <div className="border border-blue-300 p-5 rounded-2xl mt-2">
                  <p className="mt-2">
                    <span className="font-medium">Name :</span> {item.name}
                  </p>

                  <p>
                    <span className="font-medium">Comment :</span>{" "}
                    {item.comment}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end items-center gap-4">
                {/* Approve Button */}
                <button
                  className={`px-4 py-1 rounded-full text-sm  ${
                    item.approve
                      ? "bg-green-100 text-green-600 "
                      : "bg-yellow-100 text-yellow-600 cursor-pointer"
                  }`}
                >
                  {item.approve ? "Approved" : "Approve"}
                </button>

                {/* Delete */}
                <FaTrash className="cursor-pointer text-gray-500 hover:text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Comments
