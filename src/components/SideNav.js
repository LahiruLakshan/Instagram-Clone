import React from "react";

function SideNav() {
  return (
    <div>
      <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" className="logo"/>
        <ul>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" />{" "}
            Home
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/482/482631.png" />{" "}
            Search
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/795/795653.png" />{" "}
            Explore
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/5948/5948543.png" />{" "}
            Reels
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/1617/1617469.png" />{" "}
            Messages
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" />{" "}
            Notifications
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/7420/7420919.png" />{" "}
            Create
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />{" "}
            Profile
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
