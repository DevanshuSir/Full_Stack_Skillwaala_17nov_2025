import { FaFacebook , FaTwitter ,FaInstagram ,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-white shadow-md px-4 py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo+About */}
        <div>
            <h2 className="text-2xl font-bold text-blue-600">BlogStack</h2>
            <p className="mt-3 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, inventore.</p>
        </div>
        {/* Links */}
        <div>
            <h3 className="text-blue-600 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer">Home</li>
                <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
                <li className="hover:text-blue-600 cursor-pointer">About</li>
              
            </ul>
            
        </div>
        {/* Categories */}
        <div>
             <h3 className="text-blue-600 font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-blue-600 cursor-pointer">Technology</li>
                <li className="hover:text-blue-600 cursor-pointer">Web Development</li>
                <li className="hover:text-blue-600 cursor-pointer">Frontend</li>
                <li className="hover:text-blue-600 cursor-pointer">Backend</li>
                
            </ul>
        </div>
        {/* Social Links */}
        <div>
             <h3 className="text-blue-600 font-semibold mb-3">Social Links</h3>
             <div className="flex space-x-4">
                <div className="p-2 bg-gray-400 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer">
                    <FaFacebook size={16}/>
                </div>
                <div className="p-2 bg-gray-400 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer">
                    <FaInstagram size={16}/>
                </div>
                <div className="p-2 bg-gray-400 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer">
                    <FaLinkedin size={16}/>
                </div>
                <div className="p-2 bg-gray-400 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer">
                    <FaTwitter size={16}/>
                </div>
             </div>
        </div>
    </div>
    {/* Bottom */}

    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} BlogStack. All Rights Reserved
    </div>

  </footer>
  )
}

export default Footer
