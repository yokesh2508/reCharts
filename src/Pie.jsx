import React from 'react'
import { PieChart, Pie, Tooltip, Legend, } from 'recharts'
import './index.css'

const PieGraph = () => {

  let myData=[
        {
            subject:'java',
            students:150,
            fill:'orange'
            // present:100
        },
        {
            subject:'python',
            students:100,
            fill:'blue'
            // present:70
        },
        {
            subject:'react',
            students:75,
            fill:'red'
            // present:33
        },
        {
            subject:'angular',
            students:25,
            fill:'violet'
            // present:15
        },
        {
            subject:'Sql',
            students:300,
            fill:'pink'
            // present:200
        },
        {
            subject:'aiml',
            students:80,
            fill:'green'
            // present:50
        },
        {
            subject:'manual testing',
            students:140,
            fill:'grey'
            // present:80
        },
        {
            subject:'selenium',
            students:80,
            fill:'yellow'
            // present:50
        }
    ]

  return (
    <div className='piecha'>
      <PieChart width={500} height={500}>
          <Pie data={myData} outerRadius={200} cx={'50%'} cy={'50%'} dataKey={'students'} nameKey={'subject'}></Pie>
          <Tooltip></Tooltip>
          <Legend></Legend>
      </PieChart>
    </div>
  )
}

export default PieGraph
