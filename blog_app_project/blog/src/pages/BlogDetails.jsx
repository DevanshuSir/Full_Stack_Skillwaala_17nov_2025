import { FaUserCircle } from "react-icons/fa";
import { FaFacebook , FaTwitter ,FaInstagram  } from "react-icons/fa";

const blogData = {
  category: "Technology",
  title: "Introduction to JavaScript",
  desc: "Learn the basics of JavaScript, the most popular programming language for web development.",
  image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg",
};

const BlogDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-3">
      <div className="max-w-5xl mx-auto">
        <div className="px-6 py-1.5 text-blue-500 font-bold text-center">
          Published on May 07th 2026
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {blogData.title}
        </h1>

        {/* Category */}
        <div className="flex justify-center mt-3">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm">
            {blogData.category}
          </span>
        </div>

        {/* Image */}

        <div className="mt-6">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Desc */}

        <h2 className="mt-6 text-xl font-semibold text-center">
          {blogData.desc}
        </h2>

        {/* Content */}

        <div className="mt-4 space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            JavaScript is one of the most popular
            programming languages used for creating interactive and dynamic
            websites. It allows developers to add functionality like sliders,
            buttons, popups, animations, form validation, and much more to web
            pages. JavaScript works directly inside the browser, making websites
            more engaging and user-friendly.
          </p>
          <h3 className="font-medium text-2xl">Features of JavaScript</h3>

          <h3 className="font-semibold text-base">
            1. Lightweight Language
          </h3>
          <p>
            JavaScript is fast and does not require heavy setup.
          </p>
          <h3 className="font-semibold text-base">
          2. Interpreted Language
          </h3>
          <p>
           Browsers can execute JavaScript code directly without compilation.
          </p>
          <h3 className="font-semibold text-base">
         3. Dynamic Typing
          </h3>
          <p>
         You do not need to define variable types manually.
          </p>

          

            <h3 className="font-medium text-2xl">Conclusion</h3>

            <p>
              JavaScript is an essential language for modern web development. Whether you want to become a frontend developer, backend developer, or full-stack engineer, learning JavaScript is a great starting point.

Start with the basics, practice regularly, and build small projects to improve your skills quickly.
            </p>

              <div className="border-t my-8"></div>

              {/* Comment Section */}
              <div>

                {/* Comments Box */}
                <h3 className="font-semibold mb-4">Add Your Comments</h3>
                <input type="text" name="" id="" placeholder="Add name.." className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm mb-4" />
                <textarea name="" id=""
                placeholder="Add a comment.."
                className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm mb-4"
                ></textarea>
                <button className="mt-3 px-5 py-2 bg-blue-500 text-white rounded-md cursor-pointer">Submit</button>

                {/* Comments List */}
                <div className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <FaUserCircle className="text-gray-400 text-2xl"/>
                    <p className="text-sm font-semibold">Dev User</p>
                    <p className="text-xs text-gray-500">2 Hours ago</p>
                    <p className="mt-2 text-sm">This blog is really helpful 👍</p>
                  </div>
                </div>

              </div>

              {/* Share */}

              <div className="mt-10 text-center  text-sm text-gray-500">
                Share this article on
                <div className="flex justify-center gap-4 mt-2">
                  <span className="cursor-pointer"><FaFacebook
                  className="text-2xl text-blue-600"
                  /></span>
                  <span className="cursor-pointer"><FaInstagram
                   className="text-2xl text-red-600"
                  /></span>
                  <span className="cursor-pointer"><FaTwitter
                   className="text-2xl text-blue-600"
                  /></span>
                </div>
              </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
