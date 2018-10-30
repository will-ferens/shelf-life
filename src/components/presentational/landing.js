import React from 'react'
import { Link } from 'react-router-dom'
import { LANDING, BOOKSVG } from '../../constants/constants_icons'
import '../../style/landing.css'

const fill = "#8331FF"

const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="top">
                <div className="title">
                    <h1 id="shelf">Shelf Life.</h1>
                </div>
                <div className="title-copy">
                    <span>The only reading list app you’ll ever need.</span>
                </div>
                <div className="links">
                    <Link to="/login"><button className="landing-links">Login</button></Link>
                    <Link to="/register"><button className="landing-links">Register</button></Link>
                </div>
            </div>
            <div className="mid">
                <div className="first">
                    <svg width="75" height="75" viewBox="0 0 600 600" className="svg">
                        <path d={BOOKSVG.BOOK} fill={fill}></path>
                        <path d={BOOKSVG.BOOK1} fill={fill}></path>
                        <path d={BOOKSVG.BOOK2} fill={fill}></path>
                        <path d={BOOKSVG.BOOK3} fill={fill}></path>
                        <path d={BOOKSVG.BOOK4} fill={fill}></path>
                        <path d={BOOKSVG.BOOK5} fill={fill}></path>
                        <path d={BOOKSVG.BOOK6} fill={fill}></path>
                        <path d={BOOKSVG.BOOK7} fill={fill}></path>
                        <path d={BOOKSVG.BOOK8} fill={fill}></path>
                        <path d={BOOKSVG.BOOK9} fill={fill}></path>
                        <path d={BOOKSVG.BOOK10} fill={fill}></path>
                        <path d={BOOKSVG.BOOK11} fill={fill}></path>
                        <path d={BOOKSVG.BOOK12} fill={fill}></path>
                        <path d={BOOKSVG.BOOK13} fill={fill}></path>
                        <path d={BOOKSVG.BOOK14} fill={fill}></path>
                        <path d={BOOKSVG.BOOK15} fill={fill}></path>
                        <path d={BOOKSVG.BOOK16} fill={fill}></path>
                        <path d={BOOKSVG.BOOK17} fill={fill}></path>
                        <path d={BOOKSVG.BOOK18} fill={fill}></path>
                        <path d={BOOKSVG.BOOK19} fill={fill}></path>
                    </svg>
                    <h2 className="heading">Organize</h2>
                    <span>Don’t get lost in the stack! Organize your books and see your progress.</span>
                </div>
                <div className="second">
                    <svg width="75" height="75" viewBox="0 0 600 600" className="svg">
                        <path d={LANDING.MAGNIFY} fill={fill}></path>
                        <path d={LANDING.MAGNIFY1} fill={fill}></path>
                        <path d={LANDING.MAGNIFY2} fill={fill}></path>
                        <path d={LANDING.MAGNIFY3} fill={fill}></path>
                    </svg>
                    <h2 className="heading">Search</h2>
                    <span>Find thousands of titles, waiting to be read.</span>
                </div>
                <div className="third">
                    <svg width="75" height="75" viewBox="0 0 600 600" className="svg">
                        <path d={LANDING.WAND} fill={fill}></path>
                        <path d={LANDING.WAND1} fill={fill}></path>
                        <path d={LANDING.WAND2} fill={fill}></path>
                        <path d={LANDING.WAND3} fill={fill}></path>
                        <path d={LANDING.WAND4} fill={fill}></path>
                        <path d={LANDING.WAND5} fill={fill}></path>
                        <path d={LANDING.WAND6} fill={fill}></path>
                    </svg>
                    <h2 className="heading">Discover</h2>
                    <span>Coming soon! Get recommendations based on the books you love.</span>
                </div>
            </div>
            <div className="bottom">
                <p id="cta">Register for free and get started.</p>
                <div className="links-bot">
                    <Link to="/register"><button className="landing-links">Register</button></Link>
                    <Link to="/login"><button className="landing-links">Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing