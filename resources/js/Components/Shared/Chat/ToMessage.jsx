import React from "react";

const FromMessage = ({ message, time, msg }) => {
    return (
        <div className="ml-auto flex max-w-[80%] flex-row-reverse space-x-4">
            <div className="">
                <div className="rounded-xl rounded-tr-none bg-bpurple-500 p-4 text-white">
                    {message}
                    {msg.message_type === "image" &&
                        (msg.media !== null && msg.media.map((img, i) => (
                            <div key={i} >
                                <img src={img.original_url} alt="" className="max-w-[300px] max-h-[300px] " />
                            </div>
                        )))
                    }
                </div>
                <div className="my-1 flex flex-row-reverse justify-end text-xs text-gray-400">
                    {time}
                </div>
            </div>
        </div>
    );
};

export default FromMessage;
