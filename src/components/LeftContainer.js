import React from 'react';
import ReactButton from './Button';

function LeftContainer({ leftData, onClick, color }) {
  return (
    <>
      <ReactButton onClick={onClick} variant={color} ButtonName={leftData} />
    </>
  );
}

export default LeftContainer;
