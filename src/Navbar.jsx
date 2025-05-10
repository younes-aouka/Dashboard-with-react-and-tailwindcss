import React from 'react';
import { ChartNoAxesColumn, FileQuestionIcon, House, Settings, User } from 'lucide-react';
import { useStore } from './useStore';
import { NavLink } from 'react-router';
import {clsx} from 'clsx';
import logo from '/logo.svg';

const NavLinkStyling = 'flex items-center px-3 ml-7 py-2 mr-6 rounded-[10px]';

const NavBar = () => {
  const NavIsHidden = useStore((states) => states.NavIsHidden);
  const HideNav = useStore((states)=>states.HideNav);
  console.log('NavBar re-render');
  
  return (
    <ul className={clsx(`fixed left-0 top-0 z-10  w-[300px] h-full bg-white border-rr overflow-y-scroll scrollBar-none 
      xlg:translate-x-0 duration-500 ease-out`,
      (NavIsHidden?'translate-x-[-100%]':'translate-x-0')) 
     }>

      <li className="my-4 py-4 border-b border-gray-500 border-solid">
        <img src={logo} alt='logo' className='mx-auto  w-[135px] rounded-full shadow-1'/>
      </li>

      <li>
        <NavLink to="/" className={({ isActive }) => clsx(NavLinkStyling,{'bg-mainBg-color':isActive},'mt-5')}
        onClick={()=>{HideNav();}}>
          <span className='p-2 mr-2 bg-main-color rounded-full'>
            <House className=" size-5 stroke-white " />
          </span>  
          <p className="font-bold text-xl">Dashboard</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="/Tables" className={({ isActive }) => clsx(NavLinkStyling,{'bg-mainBg-color':isActive})}
        onClick={()=>{HideNav();}}>
          <span className='p-2 mr-2 bg-main-color rounded-full'>
            <ChartNoAxesColumn className=" size-5 stroke-white " />
          </span>
          <p className="font-bold text-xl">Tables</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="/Profile" className={({ isActive }) => clsx(NavLinkStyling,{'bg-mainBg-color':isActive})}
          onClick={()=>{HideNav();}}>
          <span className='p-2 mr-2 bg-main-color rounded-full'>
            <User className=" size-5 stroke-white " />
          </span>
          <p className="font-bold text-xl">Profile</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="/Map" className={({ isActive }) => clsx(NavLinkStyling,{'bg-mainBg-color':isActive})}
          onClick={()=>{HideNav();}}>
          <span className='p-2 mr-2 bg-main-color rounded-full'>
            <Settings className=" size-5 stroke-white " />
          </span>            
          <p className="font-bold text-xl">Map</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="/NotFound" className={({ isActive }) => clsx(NavLinkStyling,{'bg-mainBg-color':isActive})}
          onClick={()=>{HideNav();}}>
          <span className='p-2 mr-2 bg-main-color rounded-full'>
            <FileQuestionIcon className=" size-5 stroke-white " />
          </span>            
          <p className="font-bold text-xl">Not Found</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
