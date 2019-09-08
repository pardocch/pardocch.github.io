import React, { Component } from 'react';
import {Col, Row} from 'react-materialize';

import Typed from 'typed.js';

export default class Home extends Component {
    componentDidMount() {
        let info = this.props.info;
        const options = {
            strings: [info.name],
            typeSpeed: 80,
            onStringTyped: function() {
                document.getElementsByClassName("typed-cursor")[0].style.display = "none";
                new Typed(document.querySelector("#typeTitle > span"), {
                    strings: [info.title],
                    typeSpeed: 80,
                    onStringTyped: function() {
                        document.getElementsByClassName("typed-cursor")[1].style.display = "none";
                    }
                })
            }
        };
        this.typed = new Typed(document.querySelector("#typeName > span"), options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return(
            <div id="push">
                <section id="home" className="valign-wrapper full-h">
                    <Row className="no-margin full-w full-h">
                        <Col s={12} className="valign-wrapper full-h">
                            <Row className="full-h m-b-n">
                                <Col s={12} className="table full-h">
                                    <div className="angled-remove table-cell valign-middle">
                                        <div id="welcome">
                                            <div>
                                                <h1 id="typeName" className="no-margin center" style={{
                                                    fontSize: "46px",
                                                    margin: 0,
                                                    fontWeight: "bold"
                                                }}>
                                                    <span></span>
                                                </h1>
                                                <h3 id="typeTitle" className="monaco center" style={{
                                                    fontSize: "40px",
                                                    margin: 0
                                                }}>
                                                    <span></span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}