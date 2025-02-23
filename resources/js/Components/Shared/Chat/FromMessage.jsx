import React from 'react';

const FromMessage = ({name,message,time,dp,msg}) => {
    return (
        <div className="max-w-[80%] flex space-x-4">
            <div
                className="bg-gray-300 rounded-full w-12 h-12 flex-shrink-0 inline-block border border-gray-200 ">
                {
                    dp &&
                    <img src={dp}
                         className="rounded-full object-center object-cover"
                         alt=""/>
                }
            </div>
            <div>
                <span className="text-sm">{name}</span>
                <div
                    className="bg-bpurple-50 text-bpurple-600 p-4 rounded-xl rounded-tl-none">
                    {message}
                    {msg.message_type === "image" &&
                        (msg.media !== null && msg.media.map((img, i) => (
                            <div key={i} >
                                <img src={img.original_url} alt="" className="max-w-[300px] max-h-[300px] " />
                            </div>
                        )))
                    }
                </div>
                <div className="flex justify-end text-xs text-gray-400 my-1">
                    {time}
                </div>
            </div>
        </div>
    );
};

export default FromMessage;
