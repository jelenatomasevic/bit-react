import React from "react";

const UserCarditem = props => {
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src={props.user.pictureM} />
          <span class="card-title"> {props.user.fullName()}</span>
        </div>
        <div class="card-content">
          <p>
            Email: {props.user.getEmail()}
            <br />
            Birthday: {props.user.getDate()} <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCarditem;
