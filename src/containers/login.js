import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render(){
        return (
            <div>
                <h2>Login</h2>
                <form name="login">
                    <label htmlFor="username">Username</label>
                    <input type="text"  />
                    <label htmlFor="password">Password</label>
                </form>
            <Link to="/register"><button>Or register</button></Link>
            </div>
        )
    }
}

export default Login