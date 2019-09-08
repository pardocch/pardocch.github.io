import React, { Component } from 'react';
import { Row, Col } from 'react-materialize'

import { Track } from 'react-track';
import { tween } from 'react-imation';

import Description from './Description.jsx';
import Skills from './Skills.jsx';

export default class Profile extends Component {
    render() {
        let info = this.props.info;
        return(
            <Track component="div" className="row p100 p40s justify" formulas={[this.props.start, this.props.end]}>
                {(Span, start, end) => (
                    <Span style={tween(this.props.scrollY+150, [
                        [
                            start, {
                                opacity: 0
                            }
                        ],
                        [
                            end, {
                                opacity: 1
                            }
                        ]
                    ])}>
                        <Description description={ info.description } />
                        <Skills skills={ info.skills } />
                    </Span>
                )}
            </Track>
            // <div>
            //     <div id="profile">
            //         <Row className="p100 p40s justify">
            //             <Description description={ info.description } />
            //             <Skills skills={ info.skills } />
            //         </Row>
            //     </div>
            // </div>
        )
    }
}