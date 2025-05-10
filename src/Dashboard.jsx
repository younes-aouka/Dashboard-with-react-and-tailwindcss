import React from 'react';
import { ChartNoAxesColumn, CircleDollarSignIcon, File, Globe, Rocket, ShoppingCart } from 'lucide-react';
import MyPieChart from './MyPieChart';
import MyAreaChart from './MyAreaChart';


const Dashboard = () => {
  console.log('Dashboard re-render');
  return (
    <section className=''>
      <h2 className='my-3 font-semibold'>Dashboard</h2>
      {/* general stats */}
      <div className='responsive-grid-200 font-semibold'>
        <article className='bg-white py-3 px-5 main-br flex justify-between items-center'>
          <div className=''>
            <h4 className='text-special-txt-color'>Today's money</h4>
            <span className='text-xl'>
                $40,200
              <span className='text-sm text-main-color ml-1'>
                +55%
              </span>
            </span>
          </div>
          <span className='p-3 bg-main-color main-br'>
            <CircleDollarSignIcon className='size-6 stroke-white '/>
          </span>
        </article>
        <article className='bg-white py-3 px-5 main-br flex justify-between items-center'>
          <div className=''>
            <h4 className='text-special-txt-color'>Today's users</h4>
            <span className='text-xl'>
                540,200
              <span className='text-sm text-main-color ml-1'>
                +5%
              </span>
            </span>
          </div>
          <span className='p-3 bg-main-color main-br'>
            <Globe className='size-6 stroke-white '/>
          </span>
        </article>
        <article className='bg-white py-3 px-5 main-br flex justify-between items-center'>
          <div className=''>
            <h4 className='text-special-txt-color'>New clients</h4>
            <span className='text-xl'>
                654
              <span className='text-sm text-red-500 ml-1'>
                -5%
              </span>
            </span>
          </div>
          <span className='p-3 bg-main-color main-br'>
            <File className='size-6 stroke-white '/>
          </span>
        </article>
        <article className='bg-white py-3 px-5 main-br flex justify-between items-center'>
          <div className=''>
            <h4 className='text-special-txt-color'>Totale sales</h4>
            <span className='text-xl'>
                $540,200
              <span className='text-sm text-main-color ml-1'>
                +3%
              </span>
            </span>
          </div>
          <span className='p-3 bg-main-color main-br'>
            <ShoppingCart className='size-6 stroke-white '/>
          </span>
        </article>
      </div>
      {/* charts */}
      <div className='my-7 md:grid md:grid-cols-1.8fr-1.2fr md:gap-3'>
        <article className='bg-white main-br py-4 px-2 mb-5 md:mb-0'>
          <h3 className='text-special-txt-color pl-10'>Sales overview</h3>
          <MyAreaChart />
        </article>
        <article className='bg-white main-br py-4 px-2 md:flex md:flex-col md:justify-around'>
          <MyPieChart />
          <div className='font-semibold  main-br mt-2 flex justify-around'>
            <section>
              <div className='flex items-center gap-1'>
                <span className='inline-block p-2 bg-main-color main-br '>
                  <Rocket className='size-5 stroke-white '/>
                </span>
                <span className='inline-block text-special-txt-color '>
                  Clicks
                </span>
              </div>
              <div>
                <span className='inline-block text-[18px]'>2.42m</span>
                <div className='w-[80px] bg-gray-300 h-1 mt-2 main-br overflow-x-hidden relative'>
                  <div className='absolute top-0 left-0 w-1/2 h-1 bg-main-color'></div>
                </div>
              </div>
            </section>
            <section>
              <div className='flex items-center gap-1'>
                <span className='inline-block p-2 bg-main-color main-br '>
                  <ShoppingCart className='size-5 stroke-white '/>
                </span>
                <span className='inline-block text-special-txt-color '>
                  Sales
                </span>
              </div>
              <div>
                <span className='inline-block text-[18px]'>2400$</span>
                <div className='w-[80px] bg-gray-300 h-1 mt-2 main-br overflow-x-hidden relative'>
                  <div className='absolute top-0 left-0 w-3/4 h-1 bg-main-color'></div>
                </div>
              </div>
            </section>
            <section>
              <div className='flex items-center gap-1'>
                <span className='inline-block p-2 bg-main-color main-br '>
                  <ChartNoAxesColumn className='size-5 stroke-white '/>
                </span>
                <span className='inline-block text-special-txt-color '>
                  Items
                </span>
              </div>
              <div>
                <span className='inline-block text-[18px]'>320</span>
                <div className='w-[80px] bg-gray-300 h-1 mt-2 main-br overflow-x-hidden relative'>
                  <div className='absolute top-0 left-0 w-1/2 h-1 bg-main-color'></div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Dashboard