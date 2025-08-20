import React from 'react'
import "../Styling/styling.css"
import "../Styling/mediaQuery.css"

const UserCategory = () => {
  return (
    <div id='categorySection' className='py-5'>
        <div className="sectionWrapper container">
            <div className="sectionHeader w-100 d-flex justify-content-between">
                <h4 className='w-md-50 w-100'>
                    Why Creator Flow?
                </h4>
                <p className='w-100 w-md-50'>
                    Creator Flow empowers you to maintain your creative momentum. With structured tools and resources, you can cultivate consistency in your work. Our platform is designed to support your growth as a creator.
                </p>
            </div>
            <div className="sectionBody py-3 d-flex justify-content-between">
                <div className="Box">
                    <div className="cardPic container">
                        <img src="/creators.png" alt="" />
                    </div>
                    <div className="cardInfo">
                        <h5>
                            For Creators
                        </h5>
                        <p>
                            Saves time, simplifies branding, and unlocks earning opportunities.
                        </p>
                        <a href="" className='d-flex align-items-center text-decoration-none text-dark'>
                            <span>Learn More</span><span><i className="bi bi-caret-right-fill fs-5"></i></span>
                        </a>
                    </div>
                </div>
                <div className="Box">
                    <div className="cardPic container">
                        <img src="/Audience.png" alt="" />
                    </div>
                    <div className="cardInfo">
                        <h5>
                            For Audiences
                        </h5>
                        <p>
                            Builds trust with professional, consistent content.
                        </p>
                        <a href="" className='d-flex align-items-center text-decoration-none text-dark'>
                            <span>Sign Up</span><span><i className="bi bi-caret-right-fill fs-5"></i></span>
                        </a>
                    </div>
                </div>
                <div className="Box">
                    <div className="cardPic container">
                        <img src="/brands.png" alt="" />
                    </div>
                    <div className="cardInfo">
                        <h5>
                            For Brands
                        </h5>
                        <p>
                            Makes collaboration with creators smoother and more effective.
                        </p>
                        <a href="" className='d-flex align-items-center text-decoration-none text-dark'>
                            <span>Sign Up</span><span><i className="bi bi-caret-right-fill fs-5"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCategory