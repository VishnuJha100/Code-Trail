import { useState } from "react"
import { Eye, Heart } from 'lucide-react'

const BlogCards = (props) => {

    const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white border-1 border-black flex flex-col gap-2">
      {/* Image */}
      <div className="">
        <img src={props.image} alt="" />
      </div>
      {/* Author Name */}
      <div className="p-4">
        <p className="text-gray-800">{props.author}</p>
      </div>
      {/* Blog Heading */}
      <div className="px-4 text-2xl">
        <p>{props.heading}</p>
      </div>
      {/* Line */}
      <div className="h-0.5 mx-4 my-4 bg-gray-800"></div>
      {/* Watchings and likes */}
      <div className="px-4 flex justify-between">
        <div className="flex gap-2">
            <Eye className="size-6" />
            <p>10</p>   
        </div> 
        <div className="">
            <button onClick={() => setLiked(!liked)}><Heart className="size-6" color={liked ? "red" : "black"} fill={liked ? "red" : "none"} /></button>
        </div>
      </div>
    </div>
  )
}

export default BlogCards
