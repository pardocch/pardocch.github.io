import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

export default class Contact extends Component {
    render() {
        let info = this.props.info;
        return(
            <div>
                <Row className="p100 p40s">
                    <Col s={12} className="center">
                        <h4>
                            <b>Contact</b>
                        </h4>
                        <hr/>
                        <br/>
                        <div>
                            <a href={"tel://" + info.phonetw} className="black-text">
                                <i className="fa fa-phone-square" aria-hidden="true" style={{
                                    fontSize: "18px"
                                }}></i>
                                <span className="margin-left-18">{info.phonetwBeautified}</span>
                            </a>
                            <br/>
                            <br/>
                            <a href={"mailto:" + info.email} className="black-text">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span className="margin-left-18">{info.email}</span>
                            </a>
                            <br/>
                            <br/>
                            <a href={info.linkedin} target="_BLANK" className="black-text">
                                <i className="fa fa-linkedin-square" aria-hidden="true" style={{
                                    fontSize: "28px"
                                }}></i>
                            </a>
                            <a href={info.github} target="_BLANK" className="black-text" style={{
                                marginLeft: "48px"
                            }}>
                                <i className="fa fa-github square" aria-hidden="true" style={{
                                    fontSize: "28px"
                                }}></i>
                            </a>
                            <br/>
                            <br/>
                            <a href={"./dist/assets/Resume.pdf"} target="_BLANK" className="black-text">
                                <button className="btn btn-large teal lighten-2">View resume</button>
                            </a>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </Col>
                </Row>
        </div>
        )
    }
}