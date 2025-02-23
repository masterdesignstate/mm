import React from "react";
import { Progress } from "@/Components/ui/progress.jsx";

const MatchProgress = ({value,label}) => {
    return (
        <div>
            <div className="flex text-xl mb-2 font-medium text-bc-600 justify-between">
                <div className="dark:text-white">{label}</div>
                <div>{value} %</div>
            </div>
            <Progress value={value} className="bg-bc-50 h-2 dark:bg-white " barName=" bg-bc-600 dark:bg-bc-600 rounded-r-full"/>
        </div>
    );
};

export default MatchProgress;
