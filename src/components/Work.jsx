import ByteTheApples from '../assets/bytetheapples.png'
import { GiArtificialHive } from 'react-icons/gi'

const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen text-gray-300 bg-gradient-to-r from-black to-[#0a192f]">
        <div className="max-w-[700px] mx-auto p-4 px-8 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="font-extrabold text-transparent text-4xl inline border-b-4
                 border-purple-900 bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400">
                    Projects
                </p>
                <p className="py-6 flex"><GiArtificialHive size={25}/> Creator of Bytetheapples.com
                <br></br>// Currently working on a Django Rest Framework x React, E-commerce Platform 
                <br></br>// Check my Github for scripts</p>
            </div>

            {/* Container */}
            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">

            {/* <div style={{backgroundImage: `url(${ByteTheApples})`}} */}
                {/* Grid Item */}
                <div style={{backgroundImage: `url("https://chrispkdev.s3.us-west-1.amazonaws.com/assets/bytetheapples.png")`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bytetheapples.com
                        </span>
                        <p className='text-xs sm:text-base'>A fully functional, full stack social media network for coders and engineers.
                            <br></br>Built on Python, Django, Javascript, Bootstrap, PostgreSQL, and AWS S3 buckets.
                            <br></br>Upgraded to the latest version of Django v3.2 to address vulnerabilites 
                            <br></br>and implemented Cloudflare's DDOS protection and bot mitigation.
                            <br></br>Recruiters, please contact me to get access to a sample 
                            <br></br>admin account to view the hidden admin features
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://www.bytetheapples.com/" target="_blank" rel="noopener noreferrer">
                                <button className='highlight-button text-center rounded-lg px-4 py-3 m-2 text-[#1DA1F2] font-bold text-lg'>Visit Site</button>
                            </a>
                            <a href="https://github.com/ckp7blessed/Bytetheapples.com" target="_blank" rel="noopener noreferrer">
                                <button className='highlight-button text-center rounded-lg px-4 py-3 m-2 text-[#1DA1F2] font-bold text-lg'>Github</button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work