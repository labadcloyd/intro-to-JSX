import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function CreateNewCard(props) {
  return (
    <div className="card" key={props.key}>
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}
export default CreateNewCard;
