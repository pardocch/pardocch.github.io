import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'react-materialize';

class Card extends Component {
    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this);
    }

    render() {
        let {
            title,
            header,
            className,
            textClassName,
            actions,
            reveal,
            children,
            ...props
        } = this.props;
        let classes = {
            card: true
        };
        return (
            <div {...props} className={cx(className, classes)}>
                { header }
                <div className={cx('card-content', textClassName)}>
                    { title }
                    <div>{ children }</div>
                </div>
                { this.renderReveal(title, reveal) }
                {actions 
                    ? this.renderAction(actions) 
                    : null}
            </div>
        );
    }
    renderTitle(title, reveal) {
        let revealIcon = null;
        if (reveal) {
            revealIcon = <Icon right>more_vert</Icon>;
        }
        let classes = {
            'card-title': true,
            'grey-text': true,
            'text-darken-4': true,
            'activator': reveal
        };
    }
    renderReveal(title, reveal) {
        return (
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    { title }
                    <Icon right>close</Icon>
                </span>
                { reveal }
            </div>
        );
    }
    renderAction(reveal) {
        return (
            <div className="card-action">{ actions }</div>
        )
    }
}

Card.protoTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.element,
    textClassName: PropTypes.string,
    reveal: PropTypes.element,
    header: PropTypes.element,
    actions: PropTypes.arrayOf(PropTypes.element)
}

export default Card;