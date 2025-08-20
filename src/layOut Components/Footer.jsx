import React from 'react'
import "./styling/styling.css"
import "./styling/mediaQuery.css"

const Footer = () => {
  return (
    <div id="Footer" className="py-3 d-flex flex-column gap-5">
      <div className="wrapper container p-4 d-flex justify-content-between">
        <div className="flowDiv w-25">
          <h5>
            <span className='logo'>
                        <img src="/footer logo.png" alt="Logo" />
            </span>
            <span>
              Creator Flow
            </span>
          </h5>
          <p className="">
            Creators Flow is the ultimate hub for creators to collaborate, learn, and grow. We help you turn ideas into impact.
          </p>
        </div>
        <div className="quickLinks">
          <h6>
            Quick Links 
          </h6>
          <ul>
            <li className=""><a href="" className="text-decoration-none text-light">Home</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">How it works</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">Features</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">Who it's for</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">Why us</a></li>
          </ul>
        </div>
        <div className="socials">
          <h6>
            Social Media 
          </h6>
          <ul>
            <li className=""><a href="" className="text-decoration-none text-light">Instagram</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">Facebook</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">X</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">Tiktok</a></li>
            <li className=""><a href="" className="text-decoration-none text-light">LinkedIn</a></li>
          </ul>
        </div>
        <div className="connected w-25">
          <h6>
            Stay Connected
          </h6>
          <p>
            Join our community – get tips, resources, and updates straight to your inbox.
          </p>
          <a href="" className="btn btn-small rounded-5 py-2 px-3 text-light">Subscribe Now</a>
        </div>
      </div>
      <p className="text-center">
        © 2025 Creators Flow. All rights reserved.
      </p>
    </div>
  )
}

export default Footer