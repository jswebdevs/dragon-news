import React from "react";
import { useAuth } from "../providers/AuthProvider";

const Register = () => {
  const { registerUser, loading, error } = useAuth();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        form.reset(); // Optional: clear the form
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error registering user:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Already Have an Account?</a>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-neutral mt-4"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
