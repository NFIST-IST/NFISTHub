import React from 'react';
import { Link } from 'gatsby';
import * as classes from './style.module.css';

const SectionButton = ({ name, description, link, image, color, long = false }) => {
    return (
        <Link
            to={link}
            className={`${classes.SectionButton} ${long ? classes.SectionButtonLong : ''}`}
            style={{ backgroundColor: color }}
        >
            <div className={classes.SectionButtonText}>
                <span>{name}</span>
                <span>{description}</span>
            </div>
            <img src={image} alt={name} />
        </Link>
    );
};

export const SectionButtonLayout = ({ children }) => {
    return <div className={classes.SectionButtonLayout}>{children}</div>;
};

export default SectionButton;
