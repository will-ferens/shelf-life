import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../actions/action_user'

const login = userActions.login
class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onEmailChange(event){
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event){
        this.setState({ password: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault()

        this.props.login(this.state.email, this.state.password)
        this.setState({ email: '', password: '' })
    }

    render(){
        return (
            <div>
                <h2>Login</h2>
                <form name="login"
                    className="login-form"
                    onSubmit={this.onFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onEmailChange}  />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}  />
                    <button type="submit">Submit</button>
                </form>
            <Link to="/register"><button>Or register</button></Link>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)