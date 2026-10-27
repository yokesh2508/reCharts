import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <div className='navBar'>
      <nav>
        <ul>
            <li><Link to={''} className='a'>PieGraph</Link></li>
            <li><Link to={'bar'} className='a'>BarGraph</Link></li>
            <li><Link to={'line'} className='a'>LineGraph</Link></li>
            <li><Link to={'donout'} className='a'>DonutGraph</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
