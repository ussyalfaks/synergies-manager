import React from 'react';
import './Sidebar.css';
import Avatar from '../assets/avatar.jpeg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <img src={Avatar} alt="User Avatar" />
        <div>
        <p>Ussyalfaks</p>
        <p>Admin</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>Projects manager</li>
          <li>Pending Synergies</li>
          <li className="active">Synergies Manager</li>
          <li>Chat</li>
          <li>Profile</li>
        </ul>
      </nav>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;
