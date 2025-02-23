import * as React from "react";

export default function ChatBubble({ isUser, avatar, message }) {
    return (
        <div className="flex flex-wrap items-center gap-8 max-md:max-w-full">
            {!isUser && (
                <img
                    loading="lazy"
                    src={avatar}
                    alt={isUser ? "User avatar" : "Chat partner avatar"}
                    className="my-auto aspect-[0.97] w-[93px] shrink-0 self-stretch rounded-[100px] object-contain"
                />
            )}
            <div className="my-auto w-[374px] min-w-[240px] gap-2.5 self-stretch rounded-3xl bg-neutral-50 p-6 max-md:px-5">
                {message}
            </div>
            {isUser && (
                <img
                    loading="lazy"
                    src={avatar}
                    alt={isUser ? "User avatar" : "Chat partner avatar"}
                    className="my-auto aspect-[0.97] w-[95px] shrink-0 self-stretch rounded-[100px] object-contain"
                />
            )}
        </div>
    );
}
