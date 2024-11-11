import React from 'react';

const SubHeaderComponent = ({ filterText, onFilter}) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <input
      type="text"
      placeholder="Rechercher..."
      value={filterText}
      onChange={onFilter}
      style={{ marginRight: '10px', padding: '5px' }}
    />
  </div>
);

export default SubHeaderComponent;
