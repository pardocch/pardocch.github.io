import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import Scrollchor from 'react-scrollchor';

import { Track, TrackDocument } from 'react-track';
import { tween } from 'react-imation';
import {
    getDocumentRect, 
    getDocumentElement, 
    calculateScrollY 
} from 'react-track/tracking-formulas'
import { px, rgb } from 'react-imation/tween-value-factories'

import info from '../../aboutme.jsx';

export default class Nav extends Component {
    render() {
        let documentTracking = (
            <TrackDocument 
                formulas={[getDocumentElement, getDocumentRect, calculateScrollY]}
            >
                {(documentElement, documentRect, scrollY) => (
                    <Track component="span" formulas={[]}>
                        {Span => (
                            <Span 
                                style={tween(scrollY, [
                                    [255, { opacity: 0, top: px(-48), fontSize: px(30), color: rgb(51, 3, 0)}],
                                    [287, { opacity: 1, top: px(0), fontSize: px(30), color: rgb(51, 3, 0)}]
                            ])}>
                                <a href="/">{ info.about.name }</a>
                            </Span>
                        )}
                    </Track>
                )}
            </TrackDocument>
        );

        return(
            <Navbar brand={documentTracking} alignLinks="right" className="row white p100 pushpin">
                <Scrollchor
                    to="#profile"
                    animate={{
                        offset: -3000,
                        duration: 1300
                    }}
                >
                Home
                </Scrollchor>
                <Scrollchor
                    to="#profile"
                    animate={{
                        offset: -50
                    }}
                >
                Profile
                </Scrollchor>
                <Scrollchor
                    to="#experience"
                    animate={{
                        // offset: -80
                        offset: -80
                    }}
                >
                Experience
                </Scrollchor>
                <Scrollchor
                    to="#profolio"
                    animate={{
                        offset: -124
                    }}
                >
                Profolio
                </Scrollchor>
                <Scrollchor
                    to="#contact"
                    animate={{
                        offset: -100
                    }}
                >
                Contact
                </Scrollchor>
                <a
                    href="https://www.linkedin.com/in/chichun-hung-5b7a08146"
                    target="_BLANK"
                    className="black-text"
                >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                    href={"https://github.com/" + "pardocch"}
                    className="black-text"
                    target="_BLANK"
                >
                <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                    href={""}
                    className="black-text"
                    target="_BLANK"
                >
                <i className="fa fa-id-card" aria-hidden="true" />
                </a>
            </Navbar>
        )
    }
}