import React, { useEffect } from 'react'
import './CredentialsStyles.css'



function Credentials(props) {
    
    const handleLogout=()=>{
        props.logout()
    }

    return (
        <div className="container">
            
            <p>Vanakkam(hello) {props.username} !</p>
            <button onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
        </div>
    )
}

export default Credentials
