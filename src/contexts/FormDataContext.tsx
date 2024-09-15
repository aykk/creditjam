import React, { createContext, useContext, useState } from 'react';

interface FormData {
  age: string;
  income: string;
  creditScore: string;
  isStudent: string;
  isBusinessOwner: string;
  topCategories: string[];
  interestedInHotelCards: string;
  preferredHotel: string;
  currentBanks: string[];
  inCreditCardDebt: string;
  interestedInAirlineCards: string;
  preferredAirline: string;
}

interface FormDataContextProps {
  formData: FormData | null;
  setFormData: (data: FormData) => void;
}

// Create the context
const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

// Create a provider component
export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Create a custom hook to use the context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};