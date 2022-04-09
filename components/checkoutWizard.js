import {
  Step,
  StepLabel,
  Stepper,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../utils/styles';

export default function CheckoutWizard({ activeStep = 0 }) {
  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stepper
        className={classes.transparentBackgroud}
        activeStep={activeStep}
        alternativeLabel
      >
        {['Cart', 'Shipping Address', 'Payment Method'].map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </ThemeProvider>
  );
}
