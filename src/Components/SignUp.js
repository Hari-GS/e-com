import './SignUpStyles.css'

function SignUp(props){
    return (props.trigger)?(
        <div className='login-container'>
           <h2>Login</h2>
           <button onClick={()=>props.setTrigger(false)}>Close</button> 
        <form action="/">
            <div>
                <input type="text" name="username" placeholder="Username or Email" required/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" required/>
            </div>
            <div>
                <input type="submit" value="Login"/>
            </div>
        </form>
        </div>
    ):""
}

export default SignUp