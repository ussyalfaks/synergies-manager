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
            <FontAwesomeIcon icon={faProjectDiagram} className='Icons' />
            <span>Projects Manager</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTasks} className='Icons' />
            <span>Pending Synergies</span>
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faTasks} className='Icons' />
            <span>Synergies Manager</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className='Icons' />
            <span>Chat</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className='Icons' />
            <span>Profile</span>
          </li>
        </ul>
      </nav>

      <div>
      <button className="logout-button">
        <FontAwesomeIcon icon={faSignOutAlt} className='Icons' />
        Logout
      </button>
      </div>


    </div>
  );
};

export default Sidebar;
