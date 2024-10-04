import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  container: {
    margin: '90px 200px',
  },
  stepperContainer: {
    mb: '45px',
  },
  stepLabel: {
    fontWeight: 600,
  },
  stepGoBackButton: {
    mr: 1,
    fontWeight: 600,
    textTransform: 'none',
    position: 'absolute',
    bottom: '300px',
  },
  categoriesSkeletonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  categoriesSkeletonItem: {
    borderRadius: 10,
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
};

export default styles;
