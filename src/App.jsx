import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import BarGraph from './Bar'
import LineGraph from './Line'
import DonutGraph from './Donut'
import PieGraph from './Pie'

let myRouter=createBrowserRouter([
  {
    path:'',
    element:<Home></Home>,
    children:[
      {
        index:true,
        element:<PieGraph></PieGraph>
      },
      {
        path:'bar',
        element:<BarGraph></BarGraph>
      },
      {
        path:'line',
        element:<LineGraph></LineGraph>
      },
      {
        path:'donout',
        element:<DonutGraph></DonutGraph>
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={myRouter}>

      </RouterProvider>
      
    </div>
  )
}

export default App
