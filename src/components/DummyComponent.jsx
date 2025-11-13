import React from 'react'

const DummyComponent = ({ message }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid gray', margin: '10px' }}>
      <h2>Hello from Dummy Component!</h2>
      <p>{message}</p>
    </div>
  );
};

export default DummyComponent
