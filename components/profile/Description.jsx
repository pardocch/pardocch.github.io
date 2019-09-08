import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

export default class Description extends Component {
    render() {
        let description = this.props.description;
        return (
            <Col s={12} className="center">
                <br/>
                <br/>
                <br/>
                <br/>
                <h5>{ description }</h5>
                <br/>
                <br/>
                <br/>
                <br/>
            </Col>
        )
    }
}