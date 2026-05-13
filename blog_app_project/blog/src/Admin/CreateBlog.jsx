import { useEffect, useRef, useState } from "react";
import UploadImage from "../assets/image-upload.png";
import Quill from "quill";

const CreateBlog = () => {
  const [image, setImage] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogCategory, setblogCategory] = useState("");
  const [blogDesc, setblogDesc] = useState("");
  const [blogAction, setblogAction] = useState("");

  const EditorQuill = useRef(null);
  const QuillRef = useRef(null);

  useEffect(() => {
    if (!QuillRef.current && EditorQuill.current) {
      QuillRef.current = new Quill(EditorQuill.current, { theme: "snow" });
    }
  }, []);

  function handleForm(e) {
    e.preventDefault();
    console.log({image,blogTitle,blogSubTitle})
  }

  return (
    <div className="flex mt-16">
      <div className="flex-1 p-10 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Blog 🅱️</h1>
        <form
          action=""
          className="bg-white shadow-md rounded-xl p-6 max-w-5xl mx-auto space-y-6 mt-5"
          onSubmit={handleForm}
        >
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-1"
          >
            Upload Image
            <img
              src={!image ? UploadImage : URL.createObjectURL(image)}
              alt=""
              className="mt-2 h-16 rounded cursor-pointer"
            />
            <input
              type="file"
              name=""
              id="image"
              hidden
              required
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </label>

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Blog Title
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here.."
            value={blogTitle}
            onChange={(e)=>{setBlogTitle(e.target.value)}}
          />

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Sub Title
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here.."
            value={blogSubTitle}
            onChange={(e)=>{setBlogSubTitle(e.target.value)}}
          />

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Blog Category
          </label>
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select--</option>
          </select>

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Blog Description
          </label>
          <div
            className="w-full h-74 pb-16 sm:pb-10 relative
                border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500
                "
          >
            <div ref={EditorQuill}></div>
          </div>

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Action Publish
          </label>
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select--</option>
          </select>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
