import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Ajax from '../assets/ajax.png'
import AWS from '../assets/aws.png'
import Bootstrap from '../assets/bootstrap.jpg'
import CSSImg from '../assets/css.png'
import Django from '../assets/django.png'
import Git from '../assets/git.png'
import GoogleAnalytics from '../assets/googleanalytics.png'
import Heroku from '../assets/heroku.png'
import HtmlImg from '../assets/html.png'
import JavascriptImg from '../assets/javascript.png'
import Jquery from '../assets/jquery.png'
import Postgresql from '../assets/postgresql.png'
import Python from '../assets/python.jpg'
import ReactImg from '../assets/react.png'
import Selenium from '../assets/selenium.png'
import Tailwind from '../assets/tailwindcss.png'
import { GiArtificialHive } from 'react-icons/gi'

const Skills = () => {

    const {ref, inView} = useInView({
        threshold: 0.3
    });
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 3, bounce: 0.3
                }
            })
        }
        if(!inView){
            animation.start({x: '-100vw'})
        }
    }, [inView]);

  return (
    <div ref={ref} name='skills' className='w-full md:h-screen bg-gradient-to-r from-black to-[#0a192f] text-gray-300'>
        {/* Container */}
        <motion.div className='max-w-[1000px] mx-auto p-4 px-8 flex flex-col justify-center w-full h-full'
            animate={animation}>
            <div>
                <p className='font-extrabold text-transparent text-4xl inline 
                border-b-4 border-purple-900 bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400'>
                Skills</p>
                <p className='py-4 flex'><GiArtificialHive size={25}/> Technologies that I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-roboto'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/html.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/css.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/bootstrap.jpg" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/tailwindcss.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/javascript.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/jquery.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JQUERY</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/ajax.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>AJAX</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/react.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/python.jpg" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/django.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>DJANGO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/selenium.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>SELENIUM</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/postgresql.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>POSTGRESQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/git.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>GIT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/aws.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/heroku.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HEROKU</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src="https://chrispkdev.s3.us-west-1.amazonaws.com/assets/googleanalytics.png" alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>GOOGLE ANALYTICS</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Skills