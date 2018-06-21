import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    render(){
        return (
            <div>
                <h2>Login</h2>
                <form name="login">
                    <label htmlFor="email">Email</label>
                    <input type="text"  />
                    <label htmlFor="username">username</label>
                    <input type="text"  />
                    <label htmlFor="password">Password</label>
                    <input type="text"  />
                    <label htmlFor="confirm password">Confim Password</label>
                    <input type="text"  />
                </form>
            <Link to="/login"><button>Back to login</button></Link>
            </div>
        )
    }
}

export default Register