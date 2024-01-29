import React from "react";
import "../styles/Settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <label htmlFor="radio">Lets go</label>
      <input type="radio" id="radio" />
      <input type="range" id="range" />
    </div>
  );
};

export default Settings;
