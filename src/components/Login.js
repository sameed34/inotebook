import React, { useState } from 'react'

const Login = () => {
    const [credentials, setcredentials] = useState({email: "", password: ""})
    const handleclick = async (e) => {
     e.preventDefault();
     console.log("Clicked")
        const response = await fetch("localhost:3001/api/login/loginUser", {
        
            method: 'POST',
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          })
          const data= await response.json();
          console.log(data);
    }
   
    let onChange = (e) => {
     setcredentials({ ...credentials, [e.target.name]: e.target.value });

    }
  return (
    <div>
     <form onSubmit={handleclick}>
  <div className="mb-3" style={{marginTop: '30px'}}>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"  id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
