import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-black to-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='z-10 text-7xl sm:text-9xl text-shadow font-courgette font-bold text-[#1DA1F2]'>Chris Park</h1>
            <h2 className='text-2xl md:text-4xl sm:text-4xl overflow-visible font-bold text-[#8892b0]'>Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Specializing in engineering professional, responsive web applications <br></br>
            </p>
            <div>
            <Link to="about" smooth={true} duration={500}>
                <button className='text-white text-sm group border-2 px-6 py-1 my-2 flex rounded-full button-91
                items-center border-[#0a192f] bg-gradient-to-r from-[#6fc2b0] to-[#1DA1F2] hover:from-purple-500 hover:to-yellow-500'>
                        View More
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home