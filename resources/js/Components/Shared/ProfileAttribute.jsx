import React from 'react';

const ProfileAttribute = ({label,attribute,className}) => {
    const toSentenceCase = (str) => {
        if (typeof str !== "string" || str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    return (
        <div className={"inline-block " + className}>
            <div className="text-bc-200 dark:text-white">{label}</div>
            <div className="text-bc-600 text-xl leading-6 dark:text-bc-100">
                {toSentenceCase(attribute)}
            </div>
        </div>
    );
};

export default ProfileAttribute;
