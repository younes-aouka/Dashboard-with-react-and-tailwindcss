import React from 'react';
import { Routes,Route } from 'react-router';
import { useStore } from './useStore';
import Header from './Header';
import Dashboard from './Dashboard';
import Tables from './Tables';
import Profile from './Profile';
import Map from './Map';
import PageNotFound from './PageNotFound';

const Content = () => {
  const HideNav = useStore((states)=>states.HideNav);
  console.log('Content re-render');
  return (
    <div className='px-4 py-5 relative w-full xlg:w-[calc(100%-300px)] xlg:float-right h-full overflow-y-scroll'
    onClick={()=>{HideNav();}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='Tables' element={<Tables/>} />
        <Route path='Profile' element={<Profile />} />
        <Route path='Map' element={<Map/>} />
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default Content