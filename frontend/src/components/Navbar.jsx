import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-white border-b px-20 border-black h-20 w-screen max-w-screen text-gray-700 font-mono">
      <div className="grid grid-cols-3">
        <div className="flex items-center py-5">
            <Link to='/' className="text-3xl font-bold">Code Trail</Link>
        </div>
        <div className="row-span-2 flex gap-5 justify-center items-center">
            <Link to='/' className="text-xl">Home</Link>
            <Link to='/blog' className="text-xl">Blog</Link>
            <Link to='/roadmaps' className="text-xl">Roadmap</Link>
            <Link to='/more' className="text-xl">More</Link>
        </div>
      </div>
    </div> 
  )
}

export default Navbar
