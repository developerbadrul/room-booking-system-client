import React from 'react';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Loading: React.FC<SpinnerProps> = ({ size = 40, color = '#7469FB' }) => {
  return (
    <div className="spinner-container">
      <svg
        className="animate-spin h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color}
        style={{ height: size, width: size }}
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.84 3 7.938l3-2.647zm10.306.197A7.965 7.965 0 0120 12h-4c0 2.832-1.187 5.415-3.11 7.264l3.416-2.776z"
        ></path>
      </svg>
    </div>
  );
};

export default Loading;
