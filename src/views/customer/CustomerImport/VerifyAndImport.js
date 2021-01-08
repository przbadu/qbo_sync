import React from "react";

const VerifyAndImport = ({ activeStep, csvData }) => {
  if (activeStep !== 2) return null;

  return (
    <div>
      verify and import
      <pre>{JSON.stringify(csvData)}</pre>;
    </div>
  );
};

export default VerifyAndImport;
