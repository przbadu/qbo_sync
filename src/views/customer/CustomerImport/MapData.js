import React from "react";

const MapData = ({ activeStep, csvData }) => {
  if (activeStep !== 1) return null;
  return (
    <div>
      Map data
      <pre>{JSON.stringify(csvData)}</pre>;
    </div>
  );
};

export default MapData;
