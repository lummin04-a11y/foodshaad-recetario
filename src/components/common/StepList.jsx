
import { useState } from 'react';

export default function StepList({ steps }) {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  return (
    <ol className="step-list">
      {steps.map((step, index) => (
        <li 
          key={index} 
          className={`step-item ${completedSteps.includes(index) ? 'completed' : ''}`}
        >
          <div className="step-header">
            <span className="step-number">{index + 1}</span>
            <button 
              className="step-checkbox"
              onClick={() => toggleStep(index)}
            >
              {completedSteps.includes(index) ? '✅' : '⭕'}
            </button>
          </div>
          <p className="step-text">{step}</p>
        </li>
      ))}
    </ol>
  );
}