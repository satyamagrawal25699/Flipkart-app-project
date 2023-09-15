import React from 'react';
import './MoreT.css';
import { FaBell, FaQuestion } from 'react-icons/fa';

import { FaArrowsDownToLine, FaShare } from 'react-icons/fa6';
import { BiSolidDownload } from 'react-icons/bi';

function MoreT() {
  return (
    <div className="MoreInt">
      <div className="Moreint">
        <span className="Moreicons">
          <FaBell />
        </span>
        <span>Notification Preferences</span>
      </div>

      <div className="Moreint">
        <span className="Moreicons">
          <FaQuestion />
        </span>
        <span>24*7 Customer Care</span>
      </div>
      <div className="Moreint">
        <span className="Moreicons">
          <FaShare />
        </span>
        <span>Advertise</span>
      </div>
      <div className="Moreint">
        <span className="Moreicons">
          <BiSolidDownload />
        </span>
        <span>Download App</span>
      </div>
    </div>
  );
}

export default MoreT;
