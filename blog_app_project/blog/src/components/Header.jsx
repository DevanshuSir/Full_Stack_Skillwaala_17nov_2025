import { RiMagicFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-5 border border-purple-600 bg-purple-400 rounded-full text-white">
            Find Your Next Favorite Read 
            <RiMagicFill/>
        </div>
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
            Explore the world of Blogs 😍
        </h1>
        {/* Desc */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
            Explore a world of insightful, inspiring, and engaging blogs from different perspectives.
        </p>
        {/* Search bar */}

        <div className="mt-8 flex justify-center">
            <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full md:w-2/3 border border-gray-600">
                <input type="text" name="" id=""
                placeholder="Search blogs.."
                className="w-full px-5 py-3 text-black outline-none"
                />
                <button className="bg-blue-600 px-6 py-3 text-white flex items-center gap-2 hover:bg-blue-700 cursor-pointer">Search <FaSearch/></button>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Header
