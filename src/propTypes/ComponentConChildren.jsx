import React from 'react';
import PropTypes from 'prop-types';

const ComponentConChildren = ({ title, children }) => {
    return (
        <div>
            <h1 className='title-heading'>{title}</h1>
            <div>
                {children}
            </div>
        </div>  )
};

ComponentConChildren.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default ComponentConChildren;
