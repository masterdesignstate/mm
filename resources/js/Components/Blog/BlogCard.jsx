import React from 'react';

const BlogCard = ({heading,children,src,className,...props}) => {
    return (
        <div {...props} className={className}>

                <img src={src} alt=""/>
                <span className="font-light text-xs text-gray-600">08.08.2021</span>
                <h3 className=" mt-4  font-bold ">{heading}</h3>
                <p className="font-light text-sm">{children}
                    {children}
                </p>

        </div>
    );
};

export default BlogCard;
