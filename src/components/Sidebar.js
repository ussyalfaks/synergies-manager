import React from 'react';
import './Sidebar.css';
import Avatar from '../assets/avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faTasks, faComments, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
          <li>
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span>Projects Manager</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTasks} />
            <span>Pending Synergies</span>
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faTasks} />
            <span>Synergies Manager</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} />
            <span>Chat</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </li>
        </ul>
      </nav>
      <button className="logout-button">
        <FontAwesomeIcon icon={faSignOutAlt} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
