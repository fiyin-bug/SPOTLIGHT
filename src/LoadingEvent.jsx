
import React from "react";

function LoadingEvent() {
  return (
    <div className="loading-container">
      <h1>Loading...
        This page is not available yet
      </h1>
      {/* Add a spinner or animation here */}
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingEvent;
