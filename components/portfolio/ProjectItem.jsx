import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-materialize';

import Card from './Card.jsx';
import CardTitle from './CardTitle.jsx';

export default class ProjectItem extends Component {
    render() {
        let project = this.props.project,
            skills = (project.skills)
                ? project.skills.slice(0).map((skill, index) => <Badge key={index} className="blue">{ skill }</Badge>)
                : null,
            title = (
                <h5 className="black-text">{ project.title }{ skills }</h5>
            ),
            header = (<CardTitle image={project.avatar} />)

        project.skills.slice(0).map((skill, index) => {
            console.log(skills, project.skill)
        })
        return (
            <Col s={12} m={6} className="no-padding">
                <a href={project.url} target="_BLANK">
                    <Card className="no-margin" header={header} title={title}>
                        <p>
                            { project.description }
                        </p>
                    </Card>
                </a>
            </Col>
        )
    }
}