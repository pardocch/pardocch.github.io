import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

export default class Education extends Component {
    render() {
        let education = (
            <div>
                <span>
                    <b>{ this.props.info.name }</b>
                    <br/>
                    <Row>
                        <Col s={8} style={{fontSize: "14px"}}>{ this.props.info.degree }</Col>
                        <Col offsets={8} style={{fontSize: "14px"}}>{ this.props.info.start } - { this.props.info.end }</Col>
                    </Row>
                </span>
            </div>
        );
        return(
            <div>
                <div id="Education">
                    <Row className="p100 justify">
                        <Col s={12}>
                            <h5>
                                <b>Education</b>
                            </h5>
                            <br/>
                            { education }
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}