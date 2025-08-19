import React from 'react'
import "../Styling/styling.css"
import "../Styling/mediaQuery.css"

const ThreeStepsSec = () => {
  return (
    <div id='section2' className='py-5'>
      <div className="sectionWrap container">
        <div className="sectionHeader">
          <h4>How it works in just 3 steps!</h4>
        </div>
        <div className="sectionBody py-3 d-flex gap-4">
          <div className="leftBoxes gap-3">
              <div className="box1 box rounded-3 p-3">
                <span className='boxNumber p-2'>
                  01
                </span>
                <div className="boxText">
                  <h6>
                    Access Tools
                  </h6>
                  <p>
                    Sign up and unlock ready-to-use templates, calculators, and guides.
                  </p>
                </div>
            </div>
            <div className="box2 box rounded-3 p-3">
              <span className='boxNumber p-2'>
                  02
              </span>
              <div className="boxText">
                  <h6>
                    Build & Share
                  </h6>
                  <p>
                    Create branded content, plan your growth and set fair prices with ease.
                  </p>
                </div>
            </div>
            <div className="box3 box rounded-3 p-3">
              <span className='boxNumber p-2'>
                  03
              </span>
                            <div className="boxText">
                  <h6>
                    Earn & Grow
                  </h6>
                  <div className="bottom d-flex align-items-center justify-content-between">
                    <p className='w-75'>
                    Sell smarter, attract patnerships, and build consistent income streams. An all-in-one platform built for you in mind.
                  </p>
                  <a href="" className='py-1 px-2 earnLink'>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                  </div>
                  
                </div>
            </div>
          </div>
          <div className="rightBox rounded-3 p-3">
            <div className="textContent pb-3">
              <h4>  
                Over 1,000+ users are already using creators flow!
              </h4>
              <p className='py-3'>
                Get started now and unlock templates that will help increase your earnings!
              </p>
            </div>
            <a href="" className='btn btn-small rounded-5 startButton px-4'>
              Start Your Flow
            </a>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ThreeStepsSec