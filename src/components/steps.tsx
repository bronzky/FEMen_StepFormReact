import { useState } from "react";
import "./steps.css";

interface StepProps {
  onStepChange: (step: number) => void;
}

export const Steps = (props: StepProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Your Info" },
    { label: "Select Plan" },
    { label: "Add-Ons" },
    { label: "Summary" },
  ];

  const changeStep = (index: number) => {
    setCurrentStep(index);
    props.onStepChange(index);
  };

  return (
    <>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step_fancy`}
          onClick={() => changeStep(index)}
        >
            <div className="step_number_wrapper">
          <span className={`step_number ${currentStep == index ? "active" : ""}`}>
            {index + 1}
          </span>
            </div>

          <div className="step_texts">
            <span className="step_texts_index">Step {index + 1}</span>
            <span className="step_texts_label">{step.label}</span>
          </div>
        </div>
      ))}
    </>
  );
};
