import ServiceCards from '../cards/RoadmapCards'
import { assets } from '../assets/assets'

const Roadmap = () => {
  return (
    <div className='text-gray-700 py-10'>
      <div className='flex flex-col gap-4 items-center pb-10'>
        <h1 className='text-3xl'>Roadmaps</h1>
        <div className='bg-gray-700 w-30 h-0.5'></div>
      </div>

      <div className="grid grid-cols-3 gap-10 px-20">
        <ServiceCards image={assets.blog_1} heading='Frontend Development' link={'/roadmaps/frontend'} />
        <ServiceCards image={assets.blog_1} heading='Backend Development' link={'/roadmaps/backend'} />
        <ServiceCards image={assets.blog_1} heading='AI / ML' link={'/roadmaps/ai-ml'} />
      </div>
    </div>
  )
}

export default Roadmap
