import "./Auth.css";
import LoginComponent from "../../Components/AuthComponents/LoginComponent";
import RegisterComponent from "../../Components/AuthComponents/RegisterComponent";

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="login-block">
        <LoginComponent />
      </div>
      <div className="register-block">
        <RegisterComponent />
      </div>
    </div>
  );
};

export default Auth;
