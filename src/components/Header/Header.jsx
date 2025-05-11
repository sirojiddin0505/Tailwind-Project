import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='bg-[#4a7dc4] border-b-2 border-b-[#080808] text-white'>
        <div className='container mx-auto p-[15px] flex justify-between items-center'>
            <Link to={'/'} className='font-semibold text-[20px] hover:opacity-[80%]'>O'zbekiston</Link>
            <nav className='flex gap-[20px]'>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/about'}>Bayrog'</Link>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/plan'}>Gerb</Link>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/sum'}>So'm</Link>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/cons'}>Konstitutsiya</Link>
            </nav>
            <select className='font-medium text-[20px] cursor-pointer'>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
                <option value="en">En</option>
            </select>
        </div>
    </header>
)
}

export default Header