import { useState } from 'react'
import './App.css'
import Step from './components/step'

function App() {

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {label: "Your Info", component: <Step text="Step 1" />},
    {label: "Select Plan", component: <Step text="Step 2"  />},
    {label: "Add-Ons", component: <Step text="Step 3"  />},
    {label: "Summary", component: <Step  text="Step 4" />},
  ]

  return (
    <>
      <section className="card">
        <div className='card_steps'>
          {steps.map((step, index) => (
            <div key={index} className={`step ${currentStep == index ? "active":""}`} onClick={() => setCurrentStep(index)}>              
              <p><span>Step: {index + 1} </span>{step.label}</p>
            </div>
          )
          )}
        </div>
         <div className='card_form'>
          {steps[currentStep].component}
        </div>
      </section>
    </>
  )
}

export default App
