import React from 'react';
import './SpinnerStyles.css'; // Import CSS for styling spinner

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
