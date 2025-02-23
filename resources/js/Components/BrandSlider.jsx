import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const BrandSlider = () => {
    return (
        <div>
            <SliderPrimitive.Root
                className="relative my-4 flex w-full select-none items-center"
                value={[
                    answers[0]?.answer?.selfAnswer?.value,
                ]}
                {}
            >
                <div className="absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1">
                    {stops.map((stop) => (
                        <div
                            key={stop}
                            className="z-50 h-3 w-1 rounded bg-gray-400"
                        />
                    ))}
                </div>

                <SliderPrimitive.Track className="relative -z-20 h-1 w-full rounded bg-gray-200">
                    <SliderPrimitive.Range className="absolute h-full" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none">
                    <svg
                        className="size-6"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="14.5584"
                            height="15"
                            rx="7.27922"
                            fill="#F3F0FF"
                        />
                        <rect
                            x="1"
                            y="1"
                            width="14.5584"
                            height="15"
                            rx="7.27922"
                            stroke="#692EB7"
                            strokeWidth="2"
                        />
                        <circle
                            cx="8.2793"
                            cy="8.5"
                            r="4.5"
                            fill="#682EB8"
                        />
                    </svg>
                </SliderPrimitive.Thumb>
            </SliderPrimitive.Root>
        </div>
    );
};

export default BrandSlider;
