import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import 'font-mfizz/dist/font-mfizz.css';

import SkillLists from './SkillLists.jsx';

export default class Skills extends Component {
    render() {
        let skills = Object.entries(this.props.skills).map(([name, skills]) => {
            return (
                <div key={ name }>
                    <Row>
                        <Col s={2}>
                            <b>{ name+":" }</b>
                        </Col>
                        <Col s={10} offsets={2}>
                            <SkillLists skills={ skills } />
                        </Col>
                    </Row>
                </div>
            )
        });
        return(
            <Col s={12} style={{marginTop: '50px'}}>
                <div>
                    <div>
                        <span>
                            <h5>
                                <b>Skills</b>
                            </h5>
                            <br/>
                            { skills }
                        </span>
                    </div>
                </div>
            </Col>
        )
    }
}