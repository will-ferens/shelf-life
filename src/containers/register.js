import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerActions } from '../actions/action_register'

const register = registerActions.register
class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConf: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this)
        this.onUsernameChange = this.onUsernameChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onPasswordConfChange = this.onPasswordConfChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onEmailChange(event){
        this.setState({ email: event.target.value })
    }
    
    onUsernameChange(event){
        this.setState({ username: event.target.value })
    }

    onPasswordChange(event){
        this.setState({ password: event.target.value })
    }

    onPasswordConfChange(event){
        this.setState({ passwordConf: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault()

        this.props.register(this.state.email, this.state.username, this.state.password, this.state.passwordConf,)
        this.setState({ email: '', username: '', password: '', passwordConf: '' })
    }

    render(){
        return (
            <section className="login-wrapper">
                <div className="login">
                    <div className="title">
                        <h2 className="title-text">Register</h2>
                    </div>
                    <form 
                        className="login-form"
                        onSubmit={this.onFormSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            type="text"
                            value={this.state.email}
                            onChange={this.onEmailChange} 
                            />
                        <label htmlFor="username">Username</label>
                        <input 
                            required
                            type="text"  
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                            />
                        <label htmlFor="password">Password</label>
                        <input
                            required
                            type="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange} 
                            />
                        <label htmlFor="confirm password">Confim Password</label>
                        <input 
                            required
                            type="password" 
                            value={this.passwordConf}
                            onChange={this.onPasswordConfChange}
                            />
                        <button className="submit">Submit</button>
                        <Link to="/login"><button className="login-link">Back to login</button></Link>
                    </form>
                    </div>
            </section>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ register }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)