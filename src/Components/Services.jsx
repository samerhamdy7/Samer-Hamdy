import React from 'react'

//icon//
import { BsArrowUpRight } from 'react-icons/bs';

//motion//
import { motion } from 'framer-motion';

//Varins//
import { fadeIn } from '../variants';

//img//
import serv from '../imgs/services/services.jpg'


//services Data //

const services = [
  {
    name: "UI / Ux Designer",
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae molestiae voluptatum .',
    link: "more"

  },
  {
    name: "Development",
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae molestiae voluptatum .',
    link: "more"
  },
  {
    name: "Digital Markting",
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae molestiae voluptatum .',
    link: "more"
  },
  {
    name: "Product Branding",
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae molestiae voluptatum .',
    link: "more"
  },

]
export default function Services() {
  return (
    <div id='services' className='section mt-96 overflow-hidden p-2'>
      <div className='continer mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* text & image*/}

          <motion.div
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <img src={serv} width={500} />
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 1 year of experience
            </h3>
            <button className='btn btn-sm'>See My Work</button>

          </motion.div>

          {/*Services*/}

          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.3}}
          >
            {services.map((services, index) => {

              {/*destructer*/ }

              const { name, Description, link } = services;
              return (
                <div className=' p-2 border-b border-white/20 h-[180px]  flex' key={index}>
                  <div className='max-w-[476px] mt-12 '>
                    <h4 className='text-[19px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='leading-tight font-tertiary'>{Description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end mt-12'>
                    <a href='#' className='btn w-9 h-9 mb-[30px] flex justify-center items-center'>
                      <BsArrowUpRight /> </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>

              );
            })}
          </motion.div>

        </div>
      </div>

    </div>
  )
}
