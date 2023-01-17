import "./RegisterComponent.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-component">
      <form className="form-register" onSubmit={handleSubmit}></form>
    </div>
  );
};

export default Register;
