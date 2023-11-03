import './SignUpStyles.css'

function SignUp(props){
    return (props.trigger)?(
        <div className='login-container'>
            <div className='top-heading'>
                <h2>Login</h2>
                <button onClick={()=>props.setTrigger(false)}>Close</button> 
            </div>
           
        <form action="/">
            <div>
                <input type="text" name="username" placeholder="Username or Email" required/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" required/>
            </div>
            <div className='login-btn-container'>
                {/* <input type="submit" value="Login"/> */}
                <button className='login-btn' type='submit'>Login</button>
            </div>
        </form>
        </div>
    ):""
}

export default SignUp