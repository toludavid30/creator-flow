import React from 'react'
import "../Styling/styling.css"
import "../Styling/mediaQuery.css"

const Products = () => {
  return (
    <div id='productSection' className='py-5'>

        <div className="sectionWrapper container">
            <div className="headerWrap">
                <h4>What You'll Get With Creators Flow</h4>
            </div>
            <div className="sectionBody py-4 gap-3">
                <div className="box p-3 rounded-3">
                    <div className="icon">
                        <i class="bi bi-file-earmark-image-fill"></i>
                    </div>
                    <h6>
                        Branding Templates
                    </h6>
                    <p>
                        Social posts, flyers, and promo kits tailored for creators.
                    </p>
                </div>
                <div className="box p-3 rounded-3">
                    <div className="icon">
                        <i class="bi bi-calendar-range"></i>
                    </div>
                    <h6>
                        Content Calender
                    </h6>
                    <p>
                      Monthly posting ideas & strtagies for engagements  
                    </p>
                </div>
                <div className="box p-3 rounded-3">
                    <div className="icon">
                        <i class="bi bi-camera2"></i>
                    </div>
                    <h6>
                        Creators Guides
                    </h6>
                    <p>
                        Step by step resources on branding, growth and monetization.
                    </p>
                </div>
                <div className="box p-3 rounded-3">
                    <div className="icon">
                        <i class="bi bi-currency-exchange"></i>
                    </div>
                    <h6>
                        Earning & Pricing Calculator
                    </h6>
                    <p>
                        Know your worth and set competitive rates.
                    </p>
                </div>
                <div className="box p-3 rounded-3">
                    <div className="icon">
                        <i class="bi bi-key-fill"></i>
                    </div>
                    <h6>
                        Hashtags & CEO Bank
                    </h6>
                    <p>
                        Optimize discovery tools for each niche
                    </p>
                </div>
                <div className="box p-3 rounded-3">
                    <div className="icon">
                        <i class="bi bi-clipboard2-pulse-fill"></i>
                    </div>
                    <h6>
                        Rate Card Templates
                    </h6>
                    <p>
                       Professional pitch kits for partnerships & sponsorships.  
                    </p>
                </div>
            </div>

            <div className="sectionButton container py-4">
                <a href="" className='btn btn-small rounded-5 py-2 px-4'>
                    Start Your Food Blogger Journey 🚀
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Products