import React from 'react';

const UPIIcon: React.FC<{ className?: string }> = () => (
  <div className="w-5 h-5 flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
      alt="UPI"
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

export default UPIIcon;