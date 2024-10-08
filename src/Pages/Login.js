import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Assuming you've set up the Firebase configuration
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the home page after successful login
      navigate("/ai-chatbot");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg shadow-md p-16 w-full max-w-lg h-auto">
        <div className="flex flex-col text-center space-y-10">
          <h2 className="font-extrabold text-3xl">Login</h2>
          {error && (
            <div className="bg-red-500 text-white p-4 rounded-lg">{error}</div>
          )}
          <form className="flex flex-col space-y-8" onSubmit={handleLogin}>
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

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Submit
            </button>
          </form>
          <div className="flex space-x-6 justify-center text-center">
            <p className="mt-2">Don't have an account?</p>
            <Link to="/signup">
              <button className="bg-blue-500 text-white px-4 py-2 mb-9 rounded-full hover:bg-blue-600">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
