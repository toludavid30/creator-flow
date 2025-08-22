import React from 'react'
import "./styling/styling.css"
import "./styling/mediaQuery.css"

const Navbar = () => {
  return (
    <div className='pt-2 pt-md-4'>
        <div id='Navbar' className="navWrapper p-2 container">
            <div className="leftNav h-100">
                <div className="logoWrapper d-flex align-items-center h-100">
                    <span className='logo'>
                        <img src="/Vector.png" alt="Logo" />
                    </span>
                    <h5 className='logoText'>
                        Creator Flow
                    </h5>
                </div>
            </div>
            <div className="centerNav h-100">
                <div className="quickLinks h-100 w-100">
                    <ul className='d-flex h-100 ptt-2 w-100'>
                        {/* <li><a href="">Home</a></li> */}
                        <li><a href="#section2">How it works</a></li>
                        <li><a href="#productSection">Features</a></li>
                        <li><a href="#userSection">Who it's for</a></li>
                        <li><a href="#categorySection">Why us</a></li>
                    </ul>
                </div>
            </div>
            <div className="rightNav h-100">
                {/* <div className="getStarted h-100 w-100 m-auto">
                    <button className='btn btn-small text-light rounded-5 button1'>
                        <span className='h-100 w-100'>
                           Login 
                        </span>
                    </button>
                    <button className='btn btn-small text-light rounded-5 button2'>
                        Sign Up
                    </button>
                </div> */}
                <button
                        className="dropdown navbar-toggler d-md-none fs-4"
                        type="button"
                        aria-label="Toggle navigation"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            padding: '0 10px',
                            fontSize: '2rem'
                        }}
                        >
                        <span className="navbar-toggler-icon w-100 h-100" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-list fs-4 fs-md-6"></i>
                        </span>
                        <ul className="dropdown-menu h-auto">
                            <li><a className="dropdown-item" href="#section2">How it works</a></li>
                            <li><a className="dropdown-item" href="#productSection">Features</a></li>
                            <li><a className="dropdown-item" href="#userSection">Who it's for</a></li>
                            <li><a className="dropdown-item" href="#categorySection">Why us</a></li>
                        </ul>
                        </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar