import React from 'react'
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, CartesianGrid } from 'recharts'
import './index.css'

const BarGraph = () => {

    let myData=[
        {
            subject:'java',
            students:150,
            present:100
        },
        {
            subject:'python',
            students:100,
            present:70
        },
        {
            subject:'react',
            students:75,
            present:33
        },
        {
            subject:'angular',
            students:25,
            present:15
        },
        {
            subject:'Sql',
            students:300,
            present:200
        },
        {
            subject:'aiml',
            students:80,
            present:50
        },
        {
            subject:'manual testing',
            students:140,
            present:80
        },
        {
            subject:'selenium',
            students:80,
            present:50
        }
    ]

  return (
    <div className='barcha'>
      <BarChart width={1500} height={400} data={myData}>
        <XAxis dataKey={'subject'}></XAxis>
        <YAxis dataKey={'students'}></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>  
        <CartesianGrid strokeDasharray={"10 5"}></CartesianGrid>
        <Bar dataKey={'students'} fill='blue'></Bar>
        <Bar dataKey={'present'} fill='red'></Bar>
      </BarChart>
    </div>
  )
}

export default BarGraph
