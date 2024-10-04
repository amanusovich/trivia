import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  triviaContainer: {
    margin: '90px',
  },
  questionSkeletonItem: {
    borderRadius: 2,
    my: 2,
  },
  optionSkeletonItem: {
    borderRadius: 10,
    mb: 1,
  },
  stepButton: {
    width: 'auto',
    borderRadius: 10,
    bgcolor: 'information.main',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
  triviaStartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mb: 2,
  },
  selectedPreferences: {
    padding: 2,
    backgroundColor: 'primary.light',
    borderRadius: 2,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  },
  playButton: {
    borderRadius: '10px',
    borderWidth: '2px',
    padding: '20px 40px',
    fontSize: '1.2rem',
    textTransform: 'none',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.35)',
    },
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  questionText: {
    my: 4,
  },
  button: {
    mt: 4,
    alignSelf: 'flex-end',
    display: 'flex',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    mb: 2,
  },
  optionButton: {
    fontWeight: '500',
    justifyContent: 'flex-start',
  },
  triviaGoBackButton: {
    mt: 2,
    width: 'fit-content',
  },
};

export default styles;
