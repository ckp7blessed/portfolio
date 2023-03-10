import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/bluesphere.gif'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav); 
    window.scrollTo({
        top: 800,
        behavior: 'smooth',
    });

const alertEmail = () => {
        alert('Please email me for a copy of my resume')
    }


  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-gradient-to-r from-black to-[#0a192f] text-white'>
        <div>
            <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/bluesphere.gif" alt="Logo Gif" style={{width: '100px'}}/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex cursor-pointer'>
                <li className='px-2'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="skills" smooth={true} offset={-50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="contact" smooth={true} offset={35} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' 
            : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-black via-[#040a12] to-[#0a192f]'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" offset={-100} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" offset={-100} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>    
                </li> 
                <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/bluesphere.gif" alt="Logo Gif" className='py-8' style={{width: '150px'}}/>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center 
                    ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a href="https://www.linkedin.com/in/chrispkdev/" className='flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center 
                    ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/ckp7blessed/Bytetheapples.com" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                    <li className='w-[160px] h-[60px] flex justify-between items-center 
                    ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <button className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </button>
                    </li></Link>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                    <li className='w-[160px] h-[60px] flex justify-between items-center 
                    ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <button className='flex justify-between items-center w-full text-gray-300' onClick={alertEmail}>
                            Resume <BsFillPersonLinesFill size={30} />
                        </button>
                    </li></Link>
                </ul>
            </div>
    </div>
  )
}

export default Navbar