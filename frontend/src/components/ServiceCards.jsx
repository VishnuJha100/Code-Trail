
const ServiceCards = (props) => {
  return (
    <div className="bg-white border-1 border-black text-gray-700 flex flex-col gap-2">
      {/* Image */}
      <div className="">
        <img src={props.image} alt="" />
      </div>
      {/* Blog Heading */}
      <div className="px-4 text-2xl">
        <p>{props.heading}</p>
      </div>
      {/* Line */}
      <div className="h-0.5 mx-4 my-4 bg-gray-800"></div>
      {/* Button */}
      <button className="bg-orange-200 max-w-50 mx-4 py-2 rounded-sm mb-4">View Roadmap</button>
    </div>
  )
}

export default ServiceCards
