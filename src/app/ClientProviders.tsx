"use client";

import React from 'react';
import { FormDataProvider } from '../contexts/FormDataContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <FormDataProvider>
      {children}
    </FormDataProvider>
  );
}