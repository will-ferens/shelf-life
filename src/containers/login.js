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
            <section className="login-wrapper">
                <div className="login">
                        <div className="title">
                            <h2>Login</h2>
                        </div>
                            <form 
                                name="login"
                                className="login-form"
                                onSubmit={this.onFormSubmit}>
                                <label htmlFor="username">Email</label>
                                <input 
                                    type="text"
                                    placeholder="Email"
                                    className="email-input"
                                    value={this.state.email}
                                    onChange={this.onEmailChange}  />
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="text"
                                    placeholder="Password"
                                    className="password-input"
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}  />
                                <button type="submit" className="submit">Submit</button>
                                <Link to="/register"><button className="login-link">Or register</button></Link>
                            </form>
                </div>
            </section>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)