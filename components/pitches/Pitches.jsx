import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import ScrollChor from 'react-scrollchor';

export default class Pitches extends Component {
    render() {
        let pitches = (
            <div>
                <span style={{fontSize: "26px"}} dangerouslySetInnerHTML={{__html: this.props.info.pitches}}>
                </span>
            </div>
        );
        let contact = (
            <div>
                <ScrollChor
                    to="contact"
                >
                    <br/>
                    <button className="btn btn-large teal lighten-2">
                        CONTACT ME!
                    </button>
                </ScrollChor>
            </div>
        );
        return (
            <Row className="p100 p40s">
                <Col s={12} className="center">
                    { pitches }
                </Col>
                <Col s={12} className="center">
                    { contact }
                </Col>
            </Row>
        )
    }
}