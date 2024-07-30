import React from 'react';
import SynergyRow from './SynergyRow';
import './SynergyTable.css';

const synergyData = [
  // Populate this array with the synergy data
  {
    id: 1,
    name: 'Synergy One',
    creator: 'John Doe',
    image: 'https://via.placeholder.com/50',
    price: '$100',
    angels: ['Angel1', 'Angel2'],
    date: '2024-07-30',
  },
  {
    id: 2,
    name: 'Synergy Two',
    creator: 'Jane Smith',
    image: 'https://via.placeholder.com/50',
    price: '$200',
    angels: ['Angel3', 'Angel4'],
    date: '2024-07-31',
  },
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
