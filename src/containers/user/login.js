import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../../actions/users/action_user'
import Loading from '../../components/presentational/loading'

import '../../style/login.css'

const login = userActions.login
class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
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
        if(this.props.userInfo.loading) return <Loading />
        if(this.props.userInfo.error) { 
            return (
                <section className="login-wrapper">
                    <div className="login">
                            <div className="title">
                                <h2 className="title-text">Login</h2>
                                <p>Wrong email or password!</p>
                            </div>
                                <form 
                                    name="login"
                                    className="login-form"
                                    onSubmit={this.onFormSubmit}>
                                    <label htmlFor="username">Email</label>
                                    <input 
                                        required
                                        type="text"
                                        className="email-input"
                                        value={this.state.email}
                                        onChange={this.onEmailChange}  />
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        required
                                        type="password"
                                        className="password-input"
                                        value={this.state.password}
                                        onChange={this.onPasswordChange}  />
                                    <button type="submit" className="submit">Submit</button>
                                    <Link to="/register"><button className="login-link">Or register</button></Link>
                                </form>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="login-wrapper">
                    <div className="login">
                            <div className="title">
                                <h2 className="title-text">Login</h2>
                            </div>
                                <form 
                                    name="login"
                                    className="login-form"
                                    onSubmit={this.onFormSubmit}>
                                    <label htmlFor="username">Email</label>
                                    <input 
                                        required
                                        type="text"
                                        className="email-input"
                                        value={this.state.email}
                                        onChange={this.onEmailChange}  />
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        required
                                        type="password"
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
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ login }, dispatch)
}

function mapStateToProps(state) {

    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)