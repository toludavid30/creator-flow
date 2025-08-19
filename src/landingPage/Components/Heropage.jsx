import React from 'react'
import "../Styling/styling.css"
import "../Styling/mediaQuery.css"

const Heropage = () => {
  return (
    <div id='heroPage' className=''>
        <div className="textContainer container">
           <h1 className='py-2 typeFace'>
            The All-in-One Hub for Ambitious Creators 
            </h1> 
            <p className='typeFace pb-2'>
                Creator Flow gives you the tools, resources, and community to turn your passion into a thriving business.
            </p>
            <div className="heroButtons">
                <a className='button1 btn btn-small rounded-5 text-light py-2'>
                    Start Your Flow
                </a>
                <a className='button2 btn btn-small rounded-5 py-2'>
                    <span>
                        Explore Niches
                    </span>
                </a>
            </div>
        </div>
        <div className="socialsLogoWrap container">
            <img src="/public/60192eac-866f-419b-a3b1-2835a231a5ae-converted 1.png" alt="" />
        </div>
    </div>
  )
}

export default Heropage