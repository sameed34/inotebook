import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="formarea">
      <div className="contform">
        <div className="inputf">
            <input className="nameform" type="text" id="name" placeholder='Enter Your Name' />
            <br/>
            <input className="emailform" type="email" id='email' placeholder='Enter Your Email' />
            <div className="txta">
                <textarea  className="texta" name="text" id="txt" cols="30" rows="10"></textarea>
            </div>
                <button className='butto'>Submit</button>
        </div>
        <div className="help">
            <div className="innerhelp">

            <h5><b>Get In Touch</b></h5>
            <br/>
            <h4>If you need any help 
                <br />
                Contact Here
            </h4>
            <div className="formlink">
                <p style={{cursor: "pointer"}}>Islamabad</p>
                <p style={{cursor: "pointer"}}>0319-8094317</p>
                <p><a className='linkemail' href="sameedabbas619@gmail.com">sameedabbas619@gmail.com</a></p>
                </div>
            </div>
        </div>
      </div>
        </div>
        <div className="outer">
            <a href="www.linkedin.com/in/sameed-abbas-5aa0a02a2"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            </div>
    </div>
  )
}

export default Contact
