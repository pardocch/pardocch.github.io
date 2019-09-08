import React, { Component } from 'react';
import { TrackDocument } from 'react-track';
import { calculateScrollY, topBottom, topTop } from 'react-track/tracking-formulas';

// Header & Footer
import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';

// Navbar
import Nav from './components/layouts/Nav.jsx';

// Container
import Contact from './components/contact/Contact.jsx';
import Education from './components/education/Education.jsx';
import Experience from './components/experience/Experience.jsx';
import Home from './components/Home.jsx';
import Pitches from './components/pitches/Pitches.jsx';
import Profile from './components/profile/Profile.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';

// SASS
import 'materialize-css';
import 'materialize-css/sass/materialize.scss';
import './assets/styles/main.scss';

// info
import info from './aboutme.jsx';

export default class App extends Component {
    componentDidMount() {
        let pushpins = document.querySelectorAll('.pushpin');
        pushpins.forEach((element) => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let elemRect = element.getBoundingClientRect();
            let parentRect = element.parentElement.getBoundingClientRect();
            let elemTop = scrollTop + elemRect.top;
            let instancePushpin = M.Pushpin.init(element, {
                top: elemTop,
                // bottom: elemTop + parentRect.height - elemRect.height
            })
        });
    }
    render() {
        return(
            <div>
                <Home info={ info.about } />
                <div id="main">
                    <Nav />
                    <div id="content">

                        <TrackDocument formulas={[calculateScrollY, topBottom, topTop]}>
                            {(scrollY, topBottom, topTop) => (
                                <div> 
                                    <div id="profile">
                                        <Profile info={ info.about } scrollY={scrollY} start={topBottom} end={topTop} />
                                    </div>
                                    <hr/>
                                    <div id="experience">
                                        <Experience info={ info.experience } />
                                        <Education info={ info.education } />
                                    </div>
                                    <hr/>
                                    <Pitches info={ info.about } />
                                    <hr/>
                                    <div id="portfolio">
                                        <Portfolio info={ info.projects } />
                                    </div>
                                    <div id="contact">
                                        <Contact info={ info.about } />
                                    </div>
                                </div>           
                            )}
                        </TrackDocument>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}