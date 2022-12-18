import { FaTeamspeak } from "react-icons/fa"

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-r from-black to-[#0a192f] text-gray-300" >
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Developing your <span className="ani-gradient">ideas</span>
                        <br></br>into successful <span className="ani-gradient">products</span></p>
                    </div>
                    <div>
                        <p>From individuals and small-businesses to corporations, <br></br>my purpose is to add value to your vision and your team.
                        <br></br>My combined expertise in web development and business strategies will benefit your start up launch or current operation.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About