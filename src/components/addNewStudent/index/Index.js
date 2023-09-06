import React, { useState } from "react";
import {
  Box,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import AddNewStudent from "../AddNewStudent";
import ProccessingStudent from "../proccessingStudent/ProccessingStudent";
import OlApplied from "../olApplied/OlApplied";
import { Button } from "react-bootstrap";

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return <AddNewStudent />;
      case 2:
        return <ProccessingStudent />;
      case 3:
        return <OlApplied />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Box>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={activeStep === steps.length - 1}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
      <div className="bg-danger">{getStepContent(activeStep)}</div>
    </div>
  );
};

export default Index;
