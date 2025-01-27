import React from 'react';

const ProfileAttribute = ({label,attribute}) => {
    return (
        <div className="inline-block">
            <div className="text-sm">{label}</div>
            <div className="text-bpurple-500 text-lg">{attribute}</div>
        </div>
    );
};

export default ProfileAttribute;
