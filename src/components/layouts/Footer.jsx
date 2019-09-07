import React, { Component } from 'react';
import info from '../../aboutme.jsx';

export default class Footer extends Component {
    render() {
        return(
            <footer className="page-footer small center teal lighten-2">
                <div className="container" />
                <div className="footer-copyright">
                    <div className="container">
                        <div>
                            Made with{" "}
                            <i className="fa fa-heart"></i>{" "}using ReactJS and complied with Webpack.{" "}
                            <a href="https://github.com/pardocch/pardocch.github.io" className="white-text underline" target="_BLANK">
                                (View source code)
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}