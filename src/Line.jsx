import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import './index.css'

const LineGraph = () => {

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
    <div className='linecha'>
      <LineChart width={1500} height={400} data={myData}>
         <XAxis dataKey={'subject'}></XAxis>
         <YAxis dataKey={'students'}></YAxis>
         <Tooltip></Tooltip>
         <Legend></Legend>
         <CartesianGrid strokeDasharray={"10 5"}></CartesianGrid>
         <Line dataKey={'students'} stroke='blue' type={'monotone'}></Line>
         <Line dataKey={'present'} stroke='red' type={'monotone'}></Line>
      </LineChart>
    </div>
  )
}

export default LineGraph
