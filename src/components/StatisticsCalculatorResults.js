import React from 'react';

const StatisticsCalculatorResults = ({ calculationType, result }) => {
  const renderFormula = () => {
    switch (calculationType) {
      case 'salesTax':
        return 'Formula: Total = Price + (Price * Tax Rate)';
      case 'propertyTax':
        return 'Formula: Property Tax = Property Value * (Tax Rate / 100)';
      case 'compoundInterest':
        return 'Formula: A = Principal × (1 + Interest Rate / Times Compounded) ^ (Time Compounded × Time)';
      case 'mole':
        return 'Formula: Moles = Mass / Molar Mass';
      default:
        return '';
    }
  };

  return (
    <div>
      <h2>Calculation Result:</h2>
      <p>{renderFormula()}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default StatisticsCalculatorResults;

