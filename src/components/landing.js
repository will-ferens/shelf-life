import React from 'react'
import { Link } from 'react-router-dom'
import { LANDING, BOOKSVG } from '../constants/constants_icons'
import '../style/landing.css'


const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="top">
                <div>
                    <h2>Welcome to</h2>
                    <h1>Shelf Life</h1>
                </div>
                <div className="links">
                    <Link to="/login"><button className="landing-links">Login</button></Link>
                    <Link to="/register"><button className="landing-links">Register</button></Link>
                </div>
            </div>
            <div className="bottom">
                <div className="first">
                    <svg width="150" height="150" viewBox="0 0 1024 1024" >
                        <path d={BOOKSVG.BOOK}></path>
                        <path d={BOOKSVG.BOOK1}></path>
                        <path d={BOOKSVG.BOOK2}></path>
                        <path d={BOOKSVG.BOOK3}></path>
                        <path d={BOOKSVG.BOOK4}></path>
                        <path d={BOOKSVG.BOOK5}></path>
                        <path d={BOOKSVG.BOOK6}></path>
                        <path d={BOOKSVG.BOOK7}></path>
                        <path d={BOOKSVG.BOOK8}></path>
                        <path d={BOOKSVG.BOOK9}></path>
                        <path d={BOOKSVG.BOOK10}></path>
                        <path d={BOOKSVG.BOOK11}></path>
                        <path d={BOOKSVG.BOOK12}></path>
                        <path d={BOOKSVG.BOOK13}></path>
                        <path d={BOOKSVG.BOOK14}></path>
                        <path d={BOOKSVG.BOOK15}></path>
                        <path d={BOOKSVG.BOOK16}></path>
                        <path d={BOOKSVG.BOOK17}></path>
                        <path d={BOOKSVG.BOOK18}></path>
                        <path d={BOOKSVG.BOOK19}></path>
                    </svg>
                    <h3>Organize</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut eleifend nibh. Nam semper lectus vel velit eleifend consequat. Integer tincidunt odio metus, nec interdum nisl rhoncus et. Sed volutpat blandit risus nec dapibus. Suspendisse a nisi suscipit, ultricies nibh fermentum, condimentum ex. Nam bibendum scelerisque lacus, a hendrerit eros dictum in. Nunc eros orci, euismod quis odio quis, laoreet auctor velit. Aenean vitae enim pharetra, commodo justo suscipit, maximus nulla. Nam quis nulla sit amet felis sodales faucibus.</span>
                </div>
                <div className="second">
                    <svg width="150" height="150" viewBox="0 0 1024 1024" >
                        <path d={LANDING.MAGNIFY}></path>
                        <path d={LANDING.MAGNIFY1}></path>
                        <path d={LANDING.MAGNIFY2}></path>
                        <path d={LANDING.MAGNIFY3}></path>
                    </svg>
                    <h3>Search</h3>
                    <span>Pellentesque eu mauris molestie, hendrerit sem vitae, varius lectus. Curabitur placerat tristique fringilla. Donec efficitur tempor urna, sed tincidunt metus eleifend interdum. Curabitur ut mauris id leo pretium accumsan vel sed ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id lectus quis enim placerat tristique et vel urna. Quisque in mattis nisl, sed volutpat enim. Proin dictum faucibus tortor, a consequat velit tincidunt a. Vestibulum pharetra, sem nec efficitur dignissim, eros justo euismod mi, in posuere libero mauris ut felis.</span>
                </div>
                <div className="third">
                <svg width="150" height="150" viewBox="0 0 1024 1024" >
                        <path d={LANDING.WAND}></path>
                        <path d={LANDING.WAND1}></path>
                        <path d={LANDING.WAND2}></path>
                        <path d={LANDING.WAND3}></path>
                        <path d={LANDING.WAND4}></path>
                        <path d={LANDING.WAND5}></path>
                        <path d={LANDING.WAND6}></path>
                    </svg>
                    <h3>Discover</h3>
                    <span>Proin malesuada mauris sed felis porttitor rhoncus. Sed a finibus justo. Etiam vehicula congue accumsan. Etiam eleifend, lorem vel feugiat sagittis, mauris nisl luctus ipsum, in ullamcorper ex ante non eros. Donec sollicitudin turpis ac velit tristique bibendum. Phasellus eget condimentum mauris. Nunc malesuada turpis tortor, id sollicitudin turpis consectetur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
                </div>
            </div>
        </div>
    )
}

export default Landing