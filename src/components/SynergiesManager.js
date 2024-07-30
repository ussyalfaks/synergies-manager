import React from 'react';
import SynergyTable from './SynergyTable';
import './SynergiesManager.css';

const SynergiesManager = () => {
  return (
    <div className="synergies-manager">
      <div className="actions">
        <button className="filters-button">Filters</button>
        <button className="add-synergy-button">Add new synergy</button>
      </div>
      <SynergyTable />
    </div>
  );
};

export default SynergiesManager;
