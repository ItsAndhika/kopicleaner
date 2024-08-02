import {FiCoffee} from 'react-icons/fi'
import {CiTextAlignRight} from 'react-icons/ci'
import {IoMdClose} from 'react-icons/io'
import { useState } from 'react'
import { menu } from '@/lib/data'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
    <div id='mobile-menu' className={`${ isOpen ? "translate-x-0" : "translate-x-[900px]" } bg-transparent backdrop-blur-md fixed top-0 bottom-0 right-0 w-4/6 transition duration-300 z-10 p-5 flex flex-col lg:hidden`}>
        <IoMdClose className='text-3xl self-end' onClick={handleClose} />
        <ul>
            {menu.map(item => (
                <li className='flex flex-col items-center mt-10 gap-5'>
                    <a href={item.href}>{item.title}</a>
                </li>
            ))}
        </ul>
    </div>
    <header className='container w-full h-20 flex justify-between items-center'>
        <FiCoffee className='text-3xl' />
        <CiTextAlignRight className='text-3xl' onClick={handleOpen} />
        <ul className='hidden'>
            <li></li>
        </ul>
    </header>
    </>
  )
}

export default Header