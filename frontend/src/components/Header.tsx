import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/memories">Memories</Link></li>
        </ul>
    </div>
  )
}
