import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import ProjectItem from './ProjectItem.jsx';

export default class Portfolio extends Component {
    render() {
        let projects = this.props.info.map((project, index) => {
            return (<ProjectItem project={ project } key={ index } />)
        });
        return(
            <div id="profolio">
                <Row>
                    <div className="p100 p40s">
                        <h5>
                            <b>Projects</b>
                        </h5>
                    </div>
                    { projects }
                </Row>
                <hr/>
            </div>
        )
    }
}