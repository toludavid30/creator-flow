import React from 'react'
import "../Styling/styling.css"
import "../Styling/mediaQuery.css"

const Users = () => {
  return (
    <div id='userSection' className='py-5'>
        <div className="sectionWrapper container">
            <div className="sectionHeader">
                <h4>
                    Who It’s For
                </h4>
                <p>
                    From artists to entrepreneurs, if you create, Creator Flow helps you shine and earn.
                </p>
            </div>
            <div className="sectionBody gap-3 py-4">
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/podcasters.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Podcasters
                        </h6>
                        <p>
                            Grow your Audience
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/Stylists.png" alt="" />
                    </div>
                    <div className="cardInfo p-1 p-md-2">
                        <h6>
                            Stylists and Makeup Artists
                        </h6>
                        <p>
                            Showcase Creativity
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/skitmakers.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Skit Makers & Influencers
                        </h6>
                        <p>
                            Create Viral Content
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/vendor.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Marketplace Vendors
                        </h6>
                        <p>
                            Elevate your Online Store
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/writers.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Writers & Poets
                        </h6>
                        <p>
                            Share your Story
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/artists.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Artists & Musicians
                        </h6>
                        <p>
                            Hit the right note
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/Fitness.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Fitness Instructors
                        </h6>
                        <p>
                            Build Client Trust
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
                <div href='' className="box podcasters bg-light rounded-4 p-2">
                    <div className="cardPic container">
                        <img src="/bloggers.png" alt="" />
                    </div>
                    <div className="cardInfo p-2">
                        <h6>
                            Food Bloggers
                        </h6>
                        <p>
                            Savor the Flavor
                        </p>
                        <a href="" className='btn btn-small boxButton rounded-5'>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users