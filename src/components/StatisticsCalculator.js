import React, { useState } from 'react';
import StatisticsCalculatorResults from './StatisticsCalculatorResults';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const StatisticsCalculator = () => {
  const [calculationType, setCalculationType] = useState('salesTax');
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleCalculation = () => {
    let calculatedResult = 0;

    switch (calculationType) {
      case 'salesTax': {
        const price = parseFloat(inputs.price);
        const taxRate = parseFloat(inputs.taxRate) / 100;
        calculatedResult = price + price * taxRate;
        break;
      }
      case 'propertyTax': {
        const propertyValue = parseFloat(inputs.propertyValue);
        const taxRate = parseFloat(inputs.taxRate) / 100;
        calculatedResult = propertyValue * taxRate;
        break;
      }
      case 'compoundInterest': {
        const P = parseFloat(inputs.principal);
        const r = parseFloat(inputs.interestRate) / 100;
        const n = parseFloat(inputs.timesCompounded);
        const t = parseFloat(inputs.time);
        calculatedResult = P * Math.pow(1 + r / n, n * t);
        break;
      }
      case 'mole': {
        const mass = parseFloat(inputs.mass);
        const molarMass = parseFloat(inputs.molarMass);
        calculatedResult = mass / molarMass;
        break;
      }
      default:
        calculatedResult = 0;
    }
    
    // Set result and reset inputs
    setResult(calculatedResult.toFixed(2));
    setInputs({});
  };

  const renderFormInputs = () => {
    switch (calculationType) {
      case 'salesTax':
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Price:</label>
              <input type="number" name="price" value={inputs.price || ''} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Tax Rate (%):</label>
              <input type="number" name="taxRate" value={inputs.taxRate || ''} onChange={handleInputChange} className="form-control" />
            </div>
          </>
        );
      case 'propertyTax':
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Property Value:</label>
              <input type="number" name="propertyValue" value={inputs.propertyValue || ''} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Tax Rate (%):</label>
              <input type="number" name="taxRate" value={inputs.taxRate || ''} onChange={handleInputChange} className="form-control" />
            </div>
          </>
        );
      case 'compoundInterest':
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Principal:</label>
              <input type="number" name="principal" value={inputs.principal || ''} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Interest Rate (%):</label>
              <input type="number" name="interestRate" value={inputs.interestRate || ''} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Times Compounded per Year:</label>
              <input type="number" name="timesCompounded" value={inputs.timesCompounded || ''} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Time (years):</label>
              <input type="number" name="time" value={inputs.time || ''} onChange={handleInputChange} className="form-control" />
            </div>
          </>
        );
      case 'mole':
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Mass (g):</label>
              <input type="number" name="mass" value={inputs.mass || ''} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Molar Mass (g/mol):</label>
              <input type="number" name="molarMass" value={inputs.molarMass || ''} onChange={handleInputChange} className="form-control" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container my-5 bg-light p-5 rounded">
      <h1 className="text-center mb-4">Advanced Statistics Calculator</h1>
      <div className="mb-4">
        <label className="form-label">Select Calculation Type:</label>
        <select className="form-select" onChange={(e) => setCalculationType(e.target.value)}>
          <option value="salesTax">Sales Tax</option>
          <option value="propertyTax">Property Tax</option>
          <option value="compoundInterest">Compound Interest</option>
          <option value="mole">Mole Calculation</option>
        </select>
      </div>

      <h2>Inputs:</h2>
      {renderFormInputs()}

      <button onClick={handleCalculation} className="btn btn-primary mt-3">Calculate</button>

      {result && (
        <StatisticsCalculatorResults calculationType={calculationType} result={result} />
      )}
    </div>
  );
};

export default StatisticsCalculator;
