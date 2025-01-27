import React from 'react';

const Term = ({heading,children,className,...props}) => {
    return (
        <div {...props} className={className}>
            <h2 className="font-bold text-3xl text-black mb-3">
                {heading}
            </h2>
            <div className="font-light text-gray-800">
                {children}
            </div>
        </div>
    );
};

export default Term;
