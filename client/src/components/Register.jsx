import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  const [inVal, setInVal] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    description:""
  })
  const setData = (e) => {
    const {name,value} = e.target;
    setInVal((preValue)=>{
      return{
      ...preValue,
      [name]:value
    }
    })


  }
  return (
    <>
      <div className="container mt-1">

        <Link className='mt-4' to="/">Home</Link>
        <form>
          <div className='row mt-4'>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" name='name' value={inVal.name} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" name="email" value={inVal.email} onChange={setData}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">Age</label>
              <input type="text" name='age' value={inVal.age} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">Mobile</label>
              <input type="number" name='mobile' value={inVal.mobile} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">Work</label>
              <input type="text" name='work' value={inVal.work} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">Address</label>
              <input type="text" name='address' value={inVal.address} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="col-12  mb-3">
              <label for="exampleInputEmail1" className="form-label">Description</label>
              <textarea name="description" value={inVal.description} onChange={setData} className="form-control" id="" cols="30" rows="5"></textarea>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register