import { useState } from "react";
import "./RegisterComponent.css";
import "./NotRegistered";
import "./ForRegister";
import ForRegister from "./ForRegister";
import NotRegistered from "./NotRegistered";

const Register = () => {
  const [blockChange, setBlockChange] = useState(false);
  const handleToggle = () => {
    setBlockChange(!blockChange);
    console.log(blockChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ position: "relative" }} className="register-component">
      {blockChange ? (
        <ForRegister handleSubmit={handleSubmit} handleToggle={handleToggle} />
      ) : (
        <NotRegistered
          handleToggle={handleToggle}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
export default Register;
