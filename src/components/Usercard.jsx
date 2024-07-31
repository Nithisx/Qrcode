import React from 'react'
function User() {
    return (
        <div className="cardcontainer">

            <span className='pro'>ONLINE</span>
            <img src="images\download (1).jpg" alt="" />
            <h3>Fullname</h3>
            <h3>salem</h3>
            <p>full stack developer</p>
            <div>
                <button>Message</button>
                <button>Following</button>
            </div>
            <div>
                <h6>Skills</h6>
                <ul>
                    <li>ui</li>
                    <li>frontend</li>
                    <li>HTMl</li>
                    <li>css</li>
                    <li>Javascript</li>
                    <li>react</li>
                    <li>NOde</li>
                </ul>
            </div>
        
        </div>
    )
}
export const Usercard = () => {
  return (
    
        <User />
    
  )
}
