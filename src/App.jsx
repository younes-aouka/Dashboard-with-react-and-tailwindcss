import React from 'react';
import { BrowserRouter } from 'react-router';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';
import Content from './Content';
import NavBar from './Navbar';

const App = () => {
  console.log('App re-render');
  return (
    <main className='bg-mainBg-color w-[100vw] h-[100vh]'>
      <BrowserRouter>
        <NavBar/>
        <Content/>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default App