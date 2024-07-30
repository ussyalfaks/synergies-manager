import React from 'react';
import SynergyRow from './SynergyRow';
import './SynergyTable.css';

const synergyData = [
  // Populate this array with the synergy data
];

const SynergyTable = () => {
  return (
    <div className="synergy-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Synergy name</th>
            <th>Creator</th>
            <th>Image</th>
            <th>Price</th>
            <th>Synergies angels</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {synergyData.map((synergy, index) => (
            <SynergyRow key={index} synergy={synergy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SynergyTable;
