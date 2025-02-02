import React from 'react'

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa"

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

import { fadeIn } from "../variants"

import logo from "../imgs/samer logo/Samer2.jpg"

export default function Banner() {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center over p-2'>
      <div className="container ms-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/*text*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
              Samer <span>Hamdy</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  'WEB',
                  2000,
                  'DEVELOPER',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg lg:mx-0'>Lorem ipsum dolor,
              sit amet consectetur adipisicing elit.
              Possimus commodi accusamus impedit tempora libero repudiandae doloribus et laboriosam,
              totam maiores.</motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portofolio</a>
            </motion.div>

            {/*social*/}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto'>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>

          </div>
          {/*img*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='rounded-3xl' src={logo} alt="" />
          </motion.div>

        </div>

      </div>

    </section>
  )
}
