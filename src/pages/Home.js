import React  from 'react'
import {Link} from 'react-router-dom'

import './Home.css'

function Home() {
   
    return (<>
        <div className='home-container'>
            <div className='home-container-wrap'>
                
                
                <Link to ='/explore' className='link'><button type='submit' className='home-button'>Login</button></Link>
                </div>
                <footer className="footer">
                
              </footer>
                
        </div>
       
   </> )
}

export default Home
