import { HiOutlineMail } from 'react-icons/hi'
import { GiArtificialHive } from 'react-icons/gi'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen flex justify-center items-center p-4
    bg-gradient-to-r from-black to-[#0a192f]">
        <form method='POST' action="https://getform.io/f/8fc309d4-c126-4526-9f2a-293228c5d320" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="font-extrabold text-transparent text-4xl inline border-b-4
                 border-purple-900 bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400">
                    Contact
                </p>
                <p className="text-gray-300 py-4 flex"><GiArtificialHive size={25}/> Email me or reach out on Linkedin </p>
            </div>
            <input type="text" placeholder="Name" name='name' required className="p-2 bg-[#ccd6f6]"/>
            <input type="text" placeholder="Email" name='email' required className="my-4 p-2 bg-[#ccd6f6]" />
            <textarea placeholder="Message" name="message" rows="10" required className="p-2 bg-[#ccd6f6]"></textarea>
            <button className="text-white border-2 px-3 py-2 my-8 mx-auto flex items-center rounded-full
            border-[#0a192f] bg-gradient-to-r from-[#6fc2b0] to-[#1DA1F2] hover:from-purple-500 hover:to-yellow-500">
                Let's do business <HiOutlineMail size={30} className='p-1'/>
            </button>
        </form>
    </div>
  )
}

export default Contact