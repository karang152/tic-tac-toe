import React from 'react';

const Box = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full bg-[#E6E6E6] text-[#33312E] border-none shadow-md shadow-black rounded-2xl flex items-center justify-center text-6xl font-semibold"
    >
      {value}
    </button>
  );
};

export default Box;
