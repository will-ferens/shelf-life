import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerActions } from '../actions/users/action_register'
import FormErrors from '../components/formErrors'
import Loading from '../components/loading'
import '../style/login.css'

const register = registerActions.register
class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConf: '',
            emailValid: false,
            formValid: false,
            errors: {}
        }

        this.onEmailChange = this.onEmailChange.bind(this)
        this.onUsernameChange = this.onUsernameChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onPasswordConfChange = this.onPasswordConfChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onEmailChange(event){
        this.setState({ email: event.target.value })
        this.validateField('email', this.state.email)
    }
    
    validateField(field, value) {
        let emailValid = this.state.emailValid 
        let errors = this.state.errors

        
        switch(field) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                errors.email = emailValid ? '' : 'Please enter a valid email.'
            break
            
        }
        
        this.setState({
            errors: errors,
            emailValid: emailValid
        }, this.validateForm)
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid})
    }

    onUsernameChange(event){
        this.setState({ username: event.target.value })
    }

    onPasswordChange(event){
        this.setState({ password: event.target.value })
        
    }

    onPasswordConfChange(event){
        this.setState({ passwordConf: event.target.value })
        this.validateField('password', this.state.password)   
    }

    onFormSubmit(event){
        event.preventDefault()

        if(this.state.formValid){
            this.props.register(this.state.email, this.state.username, this.state.password, this.state.passwordConf,)
            this.setState({ email: '', username: '', password: '', passwordConf: '' })
        }
    }

    render(){
        if(this.props.register.loading) return <Loading />
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
                            ref="password"
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
                        <FormErrors errors={this.state.errors} />
                        <button className="submit" disabled={!this.state.formValid}>Submit</button>
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

function mapStateToProps(state) {
    return {
        register: state.RegisteredUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)