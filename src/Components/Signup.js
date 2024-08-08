import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/home"); // Redirect to the home page after successful signup
      } else {
        setError("Passwords do not match");
      }
    } catch (error) {
      setError(error.message); // Set the error message to display
      console.error("Failed to Sign Up");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg shadow-md p-16 w-full max-w-lg h-auto">
        <div className="flex flex-col text-center space-y-10">
          <h2 className="font-extrabold text-3xl">Sign Up</h2>
          {error && (
            <div className="bg-red-500 text-white p-4 rounded-lg">{error}</div>
          )}
          <form className="flex flex-col space-y-8" onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-full px-6 py-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-full px-6 py-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-full px-6 py-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Submit
            </button>
          </form>
          <div className="flex space-x-6 justify-center text-center">
            <p className="mt-1">Already have an account?</p>
            <Link to="/login">
              <button className="bg-blue-500 text-white px-4 py-1 mb-9 rounded-full hover:bg-blue-600">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
