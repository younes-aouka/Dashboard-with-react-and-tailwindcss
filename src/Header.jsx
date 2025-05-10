import React from 'react'
import { Bell, Menu, Search, Settings, User } from 'lucide-react';
import { useStore } from './useStore';

function Header() {
  const toggleNavState = useStore((states)=>states.toggleNavState);
  console.log('Header re-render');
  return (
    <div className='flex justify-between items-center'>
        <label className='relative'>
            <button type="button">
              <Search className='size-5 ml-1 absolute top-1/2 -translate-y-1/2'/>
            </button>
            <input type="text" className='main-b main-br w-32 p-1 pl-7
            focus:outline-none focus:ring-2'/>
        </label>
        <ul className='flex gap-3 items-center'>
            <li className='pl-3 flex'>
              <button type="button">
                <User className='size-6'/>
              </button>
            </li>
            <li className='xlg:hidden flex'>
              <button type="button" onClick={(e)=>{
                e.stopPropagation();
                toggleNavState();
              }}>
                <Menu className='size-6 '/>
              </button>
            </li>
            <li className='flex'>
              <button type="button">
                <Settings className='size-6'/>
              </button>
            </li>
            <li className='flex'>
              <button type="button">
                <Bell className='size-6'/>
              </button>
            </li>
        </ul>
    </div>
  )
}

export default Header