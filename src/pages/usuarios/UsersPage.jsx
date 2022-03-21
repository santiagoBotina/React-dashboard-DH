import React from "react";
import "./usersPage.css";
import UsersCard from "../../components/cards/UsersCard";
import TotalUsers from "../../components/users/TotalUsers";

export default function UsersPage() {
  return (
    <div className="user-page-main">
      <div className="cardContainer">
        <UsersCard className="usersPage-card" />
      </div>
      <TotalUsers className="userList" />
    </div>
  );
}
