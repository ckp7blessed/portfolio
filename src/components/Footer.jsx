import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pb-8 flex justify-center w-full mx-auto bg-gradient-to-r from-black to-[#0a192f]">
        <div className='flex justify-between items-center text-gray-300'>
        <a href="https://www.linkedin.com/in/chrispkdev/" target="_blank" rel="noopener noreferrer" className='ani-glow'>
            <FaLinkedin size={60} />
        </a>
        <a href="https://github.com/ckp7blessed/Bytetheapples.com" target="_blank" rel="noopener noreferrer" className='ml-2 ani-glow'>
            <FaGithub size={60} />
        </a>
        </div>
    </div>
  )
}

export default Footer