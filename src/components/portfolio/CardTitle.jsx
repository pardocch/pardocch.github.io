import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import constants from 'react-materialize/lib/constants';

class CardTitle extends Component {
    render() {
        let {
            image,
            reveal,
            waves,
            children,
            ...props
        } = this.props;
        let classes = {
            'card-image': true
        };
        if (waves) {
            classes['waves-effect'] = true;
            classes['waves-' + waves] = true;
            classes['waves-block'] = true;
        }
        let imgClasses = {
            'activator': reveal
        };
        let titleClasses = {
            'card-title': true
        };
        return (
            <div className={cx(classes)} {...props}>
                <img className={cx(imgClasses)} src={"/dist"+image.src} srcSet={"/dist"+image.srcSet} />
                <span className={cx(titleClasses)}>{ children }</span>
            </div>
        );
    }
}

CardTitle.propTypes = {
    children: PropTypes.node,
    reveal: PropTypes.bool,
    waves: PropTypes.oneOf(constants.WAVES),
    image: PropTypes.object.isRequired
};

export default CardTitle;