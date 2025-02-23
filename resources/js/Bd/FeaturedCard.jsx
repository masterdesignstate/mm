import * as React from "react";

export default function FeatureCard({ title, description }) {
    return (
        <div className="flex w-[359px] min-w-[240px] shrink grow flex-col justify-center rounded-[60px] bg-slate-50 px-10 py-14 max-md:max-w-full max-md:px-5">
            <div className="flex w-[368px] max-w-full flex-col">
                <div className="flex min-h-[96px] w-[98px]" />
                <div className="mt-8 flex w-full flex-col">
                    <div className="text-2xl font-bold leading-none">
                        {title}
                    </div>
                    <div className="mt-4 text-2xl leading-10">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}
