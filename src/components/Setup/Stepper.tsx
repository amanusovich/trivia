import StepperMUI from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { Typography } from '@mui/material';
import styles from './Setup.styles';

export default function Stepper({
  activeStep,
  handleStep,
  stepsLabel,
}: {
  activeStep: number;
  handleStep: (step: number) => () => void;
  stepsLabel: string[];
}) {
  return (
    <StepperMUI activeStep={activeStep} sx={styles.stepperContainer}>
      {stepsLabel.map((label, index) => (
        <Step key={label} sx={{}}>
          <StepButton onClick={handleStep(index)}>
            <Typography sx={styles.stepLabel}>{label}</Typography>
          </StepButton>
        </Step>
      ))}
    </StepperMUI>
  );
}
