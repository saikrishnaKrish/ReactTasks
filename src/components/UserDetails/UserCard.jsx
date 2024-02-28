import React from "react";
import "./UserCard.css"; // Import your CSS file

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <p className="user-username">@{user.username}</p>
      <p className="user-email">{user.email}</p>
      <div className="user-address">
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
      </div>
      <p className="user-phone">Phone: {user.phone}</p>
      <p className="user-website">Website: {user.website}</p>
      <div className="user-company">
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
