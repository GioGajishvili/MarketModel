import "./RegisterComponent.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-component">
      <form className="form-register" onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "4px", fontWeight: "bold" }}>
          New Customer
        </h2>
        <p style={{ marginBottom: "30px" }}>
          Creating an account has many benefits{" "}
        </p>
        <ul>
          <li>Check out faster</li>
          <li>Keep more than one address</li>
          <li>Track orders and more</li>
        </ul>
        <button
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "50px",
            backgroundColor: "rgb(56, 91, 187)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "30px",
            marginBottom: "70px",
            border: "none",
          }}
          type="submit"
        >
          Create an account{" "}
        </button>
      </form>
    </div>
  );
};

export default Register;
