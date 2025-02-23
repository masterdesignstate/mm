import React from 'react';

const PageHead = ({heading,description,children}) => {
    return (
        <section className="max-w-7xl px-4 lg:px-0 mx-auto dark:text-white">
            <h1 className="font-head font-medium text-7xl text-center uppercase text-bc-600 dark:text-white pt-16">{heading}</h1>
            <p className="max-w-3xl mx-auto text-center text-xl mt-4">{description}</p>
            {children}
        </section>
    );
};

export default PageHead;
