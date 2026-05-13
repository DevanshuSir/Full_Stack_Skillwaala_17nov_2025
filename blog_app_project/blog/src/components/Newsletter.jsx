

const Newsletter = () => {
  return (
    <div className="py-2 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">Subscribe to our Newsletter</h2>
        {/* Form */}
        <form action=""
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
            <input type="email" name="" id=""
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3 rounded-full text-black outline-none border border-gray-500"
            />
            <button
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer"
            >Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
