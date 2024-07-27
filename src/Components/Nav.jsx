import React from 'react'


//import Link //
import { Link } from 'react-scroll'

//import Icons//
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'

export default function Nav() {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-40 '>
      <div className='container mx-auto'>

        <div className='w-full bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='home' 
           className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='about'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='services'
           className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='work'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='contact'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquareText />
          </Link>
         
        </div>

      </div>
    </nav>
  )
}
