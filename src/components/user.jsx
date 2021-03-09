import React from "react";
function Users(props) {
  return (
    <div>
      <h3>{props.userName}</h3>
      <p>{props.email}</p>
      <p>{props.tel}</p>
    </div>
  );
}
export default Users;
