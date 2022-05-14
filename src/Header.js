import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className="heading">
        <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>
        <h1 className="heading__title">To-Do List</h1>
    </div>
  )
}

export default Header