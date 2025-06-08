import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import BlogCards from '../cards/BlogCards.jsx';
import ServiceCards from '../cards/RoadmapCards.jsx';


const Homepage = () => {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='font-mono'>
      {/* Image */}
      <div className='grid grid-cols-2 bg-cover bg-center h-screen' style={{ backgroundImage: `url(${assets.h_1})` }}>
        <div className='text-white p-20 flex flex-col justify-between'>
          <div className='max-w-160'>
            <motion.h1 className='text-6xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>Code Your Future</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }}>Dive into a world of endless possibilities with our comprehensive coding platform.</motion.p>
          </div>
          <div>
            <Link to='/roadmap'><button className='bg-transparent border-white border-2 px-4 py-2 rounded-lg'>Get Started</button></Link>
          </div>
        </div>
      </div>

      {/* Blog Feed */}
      <motion.h1 ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }} className='px-20 py-15 bg-white text-gray-700 text-5xl'>Blog Feed</motion.h1>
      <div className='grid grid-cols-3 gap-6 px-20'>
        <BlogCards image={assets.blog_1} author='Vishnu Jha' heading='Master Frontend Development with Code Trail’s Roadmap' />
        <BlogCards image={assets.blog_1} author='Vishnu Jha' heading='Master Frontend Development with Code Trail’s Roadmap' />
        <BlogCards image={assets.blog_1} author='Vishnu Jha' heading='Master Frontend Development with Code Trail’s Roadmap' />
      </div>

      {/* Roadmaps */}
      <motion.h1 ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 2 }} className='px-20 py-15 bg-white text-gray-700 text-5xl'>Roadmaps</motion.h1>
      <div className='grid grid-cols-3 gap-6 px-20'>
        <ServiceCards image={assets.blog_1} heading='Frontend Development' link={'/roadmaps/frontend'} />
        <ServiceCards image={assets.blog_1} heading='Backend Development' link={'/roadmaps/backend'} />
        <ServiceCards image={assets.blog_1} heading='AI / ML' link={'/roadmaps/ai-ml'} />
      </div>

      {/* How It Works */}
      <div className='grid grid-cols-2 px-20 py-30 bg-white text-gray-700'>
        <div className='flex flex-col w-120'>
          <div className='flex flex-col gap-4 w-120'>
            <div>
              <h1 className='text-7xl pb-10'>How It Works</h1>
            </div>
            <div>
              <p>Our platform simplifies the journey of learning to code. From expert guidance to curated tutorials, we provide the tools you need to succeed in the tech industry.</p>
            </div>
          </div>
        </div>
        <div className='px-20'>
          <img src={assets.h2} className='rounded-md' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Homepage
