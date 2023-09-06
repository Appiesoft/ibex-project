// stepsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep:0,
  isComplete: false,
  isSteps: [],
};  

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setCompleteStatus: (state, action) => {
      state.isComplete = action.payload;
    },
    setSteps: (state, action) => {
      state.isSteps = action.payload;
    },
  },
});

export const { setCurrentStep, setCompleteStatus,setSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
