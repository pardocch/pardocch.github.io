import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { px } from 'react-imation';

export default class Experience extends Component {
    render() {
        let experience = Object.entries(this.props.info).map(([index, value]) => {
            return(
                <div key={index}>
                    <span>
                        <b>{ value.company }</b>
                        <br/>
                        {
                            (value.role).map((r, ri) => {
                                return(
                                    <span key={ri}>
                                        <Row>
                                            <Col s={8} style={{fontSize: "14px"}}>
                                                { r.name }
                                            </Col>
                                            <Col offsets={8} style={{fontSize: "14px"}}>
                                                { r.start } - { r.end }
                                            </Col>
                                        </Row>
                                    </span>
                                )
                            })
                        }
                    </span>
                </div>
            )
        });
        
        return(
            <div>
                <Row className="p100 p40s">
                    <Col s={12}>
                        <h5>
                            <b>Experience</b>
                        </h5>
                        <br/>
                        { experience }
                    </Col>
                </Row>
            </div>
        )
    }
}