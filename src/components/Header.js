// import React from 'react';

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="left">
//                 <img className="logoimage" src="../Icons/achievo_no_bg_logo.png" alt="achievo logo" />
//             </div>
//             <div className="middle">
//                 <img className="logo" src="../Icons/maximo.jpg" alt="maximo symbol" />
//             </div>
//             <div className="right">
//                 <div className="spacebt">
//                     <div className="radio-btn">
//                         <div className="radio-inner"></div>
//                     </div>
//                 </div>
//                 {/* <img className="search" src="../Icons/search.svg" alt="search" />
//                 <img className="noti" src="../Icons/notifications.svg" alt="notifications" /> */}
//                 <div className="streaks_count">
//                     <span>5</span>
//                     <img className="streaks" src="../Icons/streaks.png" alt="streaks" />
//                     <div className="tooltip"></div>
//                 </div>
//                 <img src="../Icons/khyati_satija_dp.jpg" className="userpp" alt="profile" />
//             </div>
//         </div>
//     );
// };

// export default Header;
// import React, { useState } from 'react';
// import './Header.css'; // Import the CSS file for styling

// const Header = () => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <header className="header">
//       <div className="logo-left">
//         <img src="C:\Users\sharv\Downloads\Maximo-mini-project\frontend\public\Icons\maximo.jpg" alt="Logo" className="logo" />
//       </div>
//       <div className="app-title">
//         <h1>Maximo</h1>
//       </div>
//       <div className="profile" onClick={toggleDropdown}>
//         <img src="/path/to/profile-icon.png" alt="Profile" className="profile-icon" />
//         {isDropdownVisible && (
//           <div className="dropdown-menu">
//             <button className="dropdown-item">Edit Profile</button>
//             <button className="dropdown-item">Logout</button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Header.css';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleEditProfile = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  const handleLogout = () => {
    // You can also clear user authentication here (e.g., removing tokens or user data)
    navigate('/'); // Navigate to the landing page ("/" is typically the landing page route)
  };

  return (
    <header className="header">
      <div className="app-title">
        <h1>Maximo</h1>
      </div>
      <div className="profile" onClick={toggleDropdown}>
        <img
          src="Icons/usericon.png"
          alt="Profile"
          className="profile-icon"
        />
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleEditProfile}>Edit Profile</button>
            <button className="dropdown-item" onClick={handleLogout}>Logout</button> {/* Logout button */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

