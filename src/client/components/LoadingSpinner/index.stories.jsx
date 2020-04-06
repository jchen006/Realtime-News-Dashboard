import React from 'react';
import { LoadingSpinner } from './index';

export default { title: 'Loading Spinner' };

export const LoadingSpinnerNoText = () => (
  <LoadingSpinner/>
);

export const LoadingSpinnerWithText = () => (
  <LoadingSpinner text="Loading..."/>
);