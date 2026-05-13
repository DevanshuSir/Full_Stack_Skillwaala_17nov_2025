import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = ["All","Technology","Web Development","Programming","Backend","Frontend","Database"]

const blogData = [
  {
    id: 1,
    category: "Technology",
    title: "Introduction to JavaScript",
    desc: "Learn the basics of JavaScript, the most popular programming language for web development.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 2,
    category: "Web Development",
    title: "HTML for Beginners",
    desc: "A complete guide to understanding HTML structure and building web pages.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 3,
    category: "Web Development",
    title: "CSS Styling Tips",
    desc: "Improve your website design with these practical CSS tips and tricks.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 4,
    category: "Programming",
    title: "Understanding Arrays in JS",
    desc: "Learn how arrays work in JavaScript with real-world examples.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 5,
    category: "Programming",
    title: "Objects in JavaScript",
    desc: "Deep dive into JavaScript objects and how to use them effectively.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 6,
    category: "Technology",
    title: "What is AI?",
    desc: "An introduction to Artificial Intelligence and its real-world applications.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 7,
    category: "Backend",
    title: "Node.js Basics",
    desc: "Get started with Node.js and build your first backend application.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 8,
    category: "Frontend",
    title: "React Introduction",
    desc: "Learn the fundamentals of React and component-based architecture.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
  {
    id: 9,
    category: "Database",
    title: "MongoDB Guide",
    desc: "Understand how MongoDB works and how to store data efficiently.",
    image: "https://miro.medium.com/1*7k-C5OKr7iST_LaheCLS6A.jpeg"
  },
 
];

const Blogs = () => {

   const [activeCategory,setActiveCategory] = useState("All")

   const filterBlogs = activeCategory === "All" ? blogData : blogData.filter((blog)=>blog.category === activeCategory)
   

  return (
    <div className="py-1 px-4 m-14">
      <div className="max-w-7xl mx-auto">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
{
            Categories.map((cat)=>(
                <button
                onClick={()=>{setActiveCategory(cat)}}
                key={cat}
                className={`px-5 py-2 rounded-full transition cursor-pointer ${
                    activeCategory === cat ?
                    "bg-blue-600 text-white":
                    "bg-white text-gray-700 hover:bg-blue-300"
                }`}
                >{cat}</button>
            ))
        }
        </div>
        
      </div>
      {/* Blog Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
            filterBlogs.map((blog)=>(
              <Link to={"/blog-details"}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow hover:shadow-blue-200 transition h-full">
                    {/* image */}
                    <img src={blog.image} alt={blog.title}
                    className="w-full h-48 object-cover"
                    />
                    {/* Content */}
                    <div className="p-5">
                        {/* Category tag */}
                        <span
                        className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                        >{blog.category}</span>
                        {/* Title */}
                        <h2 className="mt-3 font-semibold text-lg ">{blog.title}</h2>
                        {/* Description */}
                        <p className="mt-2 text-gray-500 text-sm">{blog.desc}</p>
                    </div>
                </div>
              </Link>
                
            ))
        }
      </div>
    </div>
  )
}

export default Blogs
