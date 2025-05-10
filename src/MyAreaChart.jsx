import React from 'react'
import {CartesianGrid,XAxis,YAxis,Tooltip,Legend,AreaChart,Area,ResponsiveContainer} from 'recharts'

const data = [
  {
    'month': 'January',
    'sales': '10'
  },
  {
    'month': 'Fibruary',
    'sales': '15'
  },
  {
    'month': 'Mars',
    'sales': '18'
  },
  {
    'month': 'Aprile',
    'sales': '16'
  },
  {
    'month': 'May',
    'sales': '15'
  },
]

function MyAreaChart() {
  return(
    <ResponsiveContainer height={300} width='100%'>                          
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray='5' />
      <XAxis dataKey='month' stroke='#A0AEC0' />
      <YAxis stroke='#A0AEC0'/>
      <Area type='monotone' strokeWidth={2} dataKey='sales' stroke='rgb(44 186 173)' fill='url(#colorA)' />
      <Legend align='right' verticalAlign='top' iconType='circle' iconSize={10}/>
      <Tooltip />
    </AreaChart>
    </ResponsiveContainer>
    
  )
}

export default MyAreaChart