import React from 'react'

//motion//
import { motion } from 'framer-motion'

//variens//
import { fadeIn } from '../variants'

//imgs//
import logo from "../imgs/work/work.jpg"
import logo2 from "../imgs/work/digital market.jpg"

export default function Work() {
  return (
    <section id='work' className='section '>
      <div className="container mx-auto mt-96 overflow-hidden">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0 '>
            {/*text*/}
            <div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores debitis reiciendis soluta impedit voluptatum sint sunt eaque eveniet nihil laborum.</p>
              <button className='btn btn-sm'>View All Products</button>
            </div>

            <div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*Image*/}
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transtion-all duration-300'></div>

              {/*img*/}
              <img className='group-hover:scale-125 trantion-all duration-500 w-full' src={logo} />

              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>

              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>

              </div>


            </div>
          </motion.div>
          
          <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
             {/*Image*/}
             <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transtion-all duration-300'></div>

              {/*img*/}
              <img className='group-hover:scale-125 trantion-all duration-500 rounded-xl w-full' src={logo2} />

              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>

              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>

              </div>


            </div>
             {/*Image*/}
             <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transtion-all duration-300'></div>

              {/*img*/}
              <img className='group-hover:scale-125 trantion-all duration-500 w-full ' src={logo} />

              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>

              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>

              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
