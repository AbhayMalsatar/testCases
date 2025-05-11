import React, { useEffect } from 'react'

function Login(props) {
  // console.log("ddd")
  // window.addEventListener("afterprint", (e)=>{
    // console.log("Dsdsd")
  // })
  useEffect(() => {
    // Effect 1
  }, []);

  useEffect(() => {
    // Effect 2
  }, []);

  useEffect(() => {
    // Effect 3
  }, []);

  function handle() {
    
  }
  return (
    <div>
      {/* <input type='text'/> */}
      {
        props.name ? <h1>{props.name}</h1> : <button onClick={handle}>login</button>
      }
    </div>
  )
}

export default Login
