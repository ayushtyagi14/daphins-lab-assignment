import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img className='logo-img' src="https://img.icons8.com/emoji/40/000000/white-large-square-emoji.png" />
                Medical Darpan
            </div>
            <div className="nav">
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">Distributors</a>
                <a href="/">Manufacturers</a>
                <a href="/">About us</a>
                <a href="/">Blog</a>
            </div>
            <div className="login">
                <p className='user'>Login</p>
                <img className='user-img' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/ffffff/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png" height={25} width={25} />
            </div>
        </div>
    )
}

export default Navbar
