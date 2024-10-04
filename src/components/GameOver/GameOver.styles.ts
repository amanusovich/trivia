import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    mt: 8,
    gap: 4,
    alignItems: 'center',
  },
  scoreLabel: {
    fontWeight: 'bold',
    padding: 4,
    backgroundColor: 'primary.light',
    borderRadius: 2,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  },
  buttonsContainer: {
    display: 'flex',
    mt: 2,
    gap: 4,
  },
};

export default styles;
