import React, { useState } from 'react'
import "./styling.css"
import { useForm } from 'react-hook-form'

const Subscribe = () => {
    const {register, handleSubmit} =useForm()
    const [isLoading, setIsloading] = useState(false)
    const baseUrl = "https://noderender-i690.onrender.com/auth/sendFlowSub"
    const sendMessage = async(payload) =>{
        setIsloading(true)
    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers : {
          "Content-Type":"application/json"
        } 
      })
      const data = await res.json()
      console.log(data);
      alert(data.message)
    } catch (error) {
      console.log(error);
    }finally{
      setIsloading(false)
    }
    }
  return (
    <div id='subscribePage' className='py-5'>
        <div className="pageWrapper container w-75">
            <form className="container w-75 py-4 mx-auto d-flex flex-column gap-3" onSubmit={handleSubmit(sendMessage)} action="">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" {...register("name")} className="form-control form-control-md" id="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} className="form-control form-control-md" id="email" placeholder="Enter your email"/>
            </div>
            {/* <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" {...register("phone")} className="form-control form-control-md" id="email" placeholder="Enter your phone number"/>
            </div> */}
            <button type="submit" className="btn btn-dark btn-lg w-100"disabled = {isLoading}>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Subscribe