import { Link } from 'react-router-dom'

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
      <div className='bg-orange-200 w-2/5 flex justify-center mb-4 mx-4 rounded-md'>
        <Link to={props.link} className='block py-2'>View Roadmap</Link>
      </div>
    </div>
  )
}

export default ServiceCards
