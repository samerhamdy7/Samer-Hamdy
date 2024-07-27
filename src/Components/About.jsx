import React from 'react'

//countup//
import CountUp from 'react-countup';

//intersection observer//
import { useInView } from 'react-intersection-observer';

//motion//
import { motion } from 'framer-motion';

//variant//
import { fadeIn } from '../variants'

//img//
import logo from '../imgs/samer logo/samer.jpg'


export default function About() {

  const [ref, inView] = useInView({
    threshold: 0.5
  });
  return (
    <section id='about' className='section mt-10 overflow-hidden p-2' ref={ref} >
      <div className="container mx-auto">
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-x-20
         justify-center items-center '>


          {/*img*/}

          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
           className='bg-about bg-contain bg-no-repeat h-[330px] mix-blend-lighten bg-top '>
            <img className='rounded-3xl ' width={400} src={logo} />
          </motion.div>


          {/*text*/}

          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.3}}
           className='felx-1 mt-40'>
            <h2 className='h2 text-accent p-1'> About Me </h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 1 year of experience</h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Unde quas facilis, soluta nisi adipisci aliquid.
              Eum saepe cumque voluptates provident.</p>



            {/*state*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={2} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Months of <br />
                  Experince
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={11} duration={2} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={9} duration={2} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a className='text-gradient btn-link' href="#">My Portofolio</a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
