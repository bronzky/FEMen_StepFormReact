import React from "react";

interface StepProps {
    text: string,
    value?: number
}

const Step = (props: StepProps) => {
    return (
        <div>
            <h1>{props.text}</h1>            
        </div>
    );
}

export default Step;