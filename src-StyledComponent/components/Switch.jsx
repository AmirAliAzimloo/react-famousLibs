import React, { useState } from "react";
import "./Switch.css";

function Switch({ toggleTheme }) {
  const [checked, setChecked] = useState(false);

  const switchHandler = () => {
    setChecked((prevChecked) => !prevChecked);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={switchHandler} />
      <span className="switch" />
    </label>
  );
}
export default Switch;
