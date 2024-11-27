import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2 className="heading">Order Now, Savor Later!</h2>
        <div className='same-line'>
        <p className="subheading">Fast, reliable food delivery with a click of a button—hot meals, delivered fresh !!!</p>
        <a href="#explore-menu"><button>View Menu</button></a>
        </div>
      </div>
    </div>
  )
}

export default Header
