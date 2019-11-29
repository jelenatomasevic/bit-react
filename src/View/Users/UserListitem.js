import React from "react";
import User from "../model/User";

const UserListitem = props => {
  return (
    <li class="collection-item avatar">
      <img src={props.user.picture} alt="" class="circle" />
      <span class="title">Name: {props.user.fullName()}</span>
      <p>
        Email: {props.user.getEmail()}
        <br />
        Birthday: {props.user.getDate()} <br />
      </p>
    </li>
  );
};
export default UserListitem;
