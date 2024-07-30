import React from 'react';
import './SynergyRow.css';



const SynergyRow = ({ synergy }) => {
  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td>{synergy.name}</td>
      <td>{synergy.creator}</td>
      <td><img src={synergy.image} alt="Synergy" /></td>
      <td>{synergy.price}</td>
      <td>{synergy.angels.join(', ')}</td>
      <td>{synergy.date}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default SynergyRow;
