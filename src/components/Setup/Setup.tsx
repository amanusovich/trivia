import Box from '@mui/material/Box';
import { useState } from 'react';
import Stepper from './Stepper';
import StepContent from './StepContent';
import TriviaCategories from './TriviaCategories';
import TriviaDifficulty from './TriviaDifficulty';
import TriviaStart from './TriviaStart';
import styles from './Setup.styles';

export default function Setup() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const steps = [
    {
      label: 'Temática',
      component: <TriviaCategories handleNextStep={handleNextStep} />,
    },
    {
      label: 'Dificultad',
      component: <TriviaDifficulty handleNextStep={handleNextStep} />,
    },
    { label: 'Jugar!', component: <TriviaStart /> },
  ];

  const stepsLabel = steps.map((step) => step.label);
  const stepsContent = steps.map((step) => step.component);

  return (
    <Box sx={styles.container}>
      <Stepper
        stepsLabel={stepsLabel}
        activeStep={activeStep}
        handleStep={handleStep}
      />
      <StepContent
        stepIndex={activeStep}
        stepsContent={stepsContent}
        handleBack={handleBack}
      />
    </Box>
  );
}
