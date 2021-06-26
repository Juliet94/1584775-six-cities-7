import React from 'react';

function LoadingScreen() {
  return (
    <div style={{margin: '30% 50%'}}>
      <svg
        className="spinner"
        style={{
          animation: 'rotate 2s linear infinite',
          zIndex: 2,
          width: '50px',
          height: '50px',
        }}
      >
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          style={{
            stroke: '#009acc',
            strokeLinecap: 'round',
            animation: 'dash 1.5s ease-in-out infinite',
          }}
        />
      </svg>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
