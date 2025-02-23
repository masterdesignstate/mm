import React from "react";
import { ArrowLeft01Icon } from "@hugeicons/react";
import {Link} from "@inertiajs/react"
const GoBack = () => {
    return (
        <div>
            <button onClick={()=>window.history.back()} className="size-10 border rounded-full border-gray-300  flex items-center justify-center">
                <ArrowLeft01Icon/>
            </button>
        </div>
    );
};

export default GoBack;
