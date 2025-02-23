import React from 'react';

const BlogCard = ({heading,children,src,className,...props}) => {
    return (
        <div {...props} className={className}>

                <img src={src} alt="" className="rounded-2xl"/>
                <span className="font-light text-xs text-gray-600">08.08.2021</span>
                <h3 className=" mt-4  font-bold text-bc-600 dark:text-white">{heading}</h3>
                <p className="font-light text-sm text-bc-900 dark:text-white">{children}
                    {children}
                </p>

        </div>
    );
};

export default BlogCard;
