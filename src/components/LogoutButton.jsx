import React from "react";
import logoutimage from "../public/images/logout.png";

const LogoutButton = () => {
  return (
    <div>
      <img
        className="h-[27.5px] w-[25px] cursor-pointer z-[2]"
        loading="lazy"
        alt=""
        src={logoutimage}
      />
    </div>
  );
};

export default LogoutButton;
