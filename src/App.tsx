import { useState } from 'react'
import './App.css'
import Step from './components/step'
import { Steps } from './components/steps';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const step_comps = [
    {component: <Step text="Step 1" />},
    {component: <Step text="Step 2"  />},
    {component: <Step text="Step 3"  />},
    {component: <Step  text="Step 4" />},
  ];

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  }
  return (
    <>
      <section className="card">
        <div className='card_steps'>
          <Steps onStepChange={handleStepChange}/>
        </div>
         <div className='card_form'>
          {step_comps[currentStep].component}
        </div>
      </section>
    </>
  )
}

export default App
