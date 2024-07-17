import React from 'react'

import logo from "../imgs/logo/samer logo.png"

export default function Header() {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={logo} width={100} className='rounded-lg'/>
          </a>
          <button className='btn btn-sm'>Work With Me</button>
        </div>
      </div>
    </header>
  )
}
