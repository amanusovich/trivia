import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Setup.styles';

export default function StepContent({
  stepIndex,
  stepsContent,
  handleBack,
}: {
  stepIndex: number;
  stepsContent: JSX.Element[];
  handleBack: () => void;
}) {
  return (
    <>
      {stepsContent[stepIndex]}
      {stepIndex > 0 && (
        <Button
          variant='contained'
          color='primary'
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={styles.stepGoBackButton}
        >
          Volver
        </Button>
      )}
    </>
  );
}
