import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
      <div className="text-2xl font-bold">
        <h1>AI Services</h1>
      </div>
      <div className="flex space-x-6">
        <ul className="flex space-x-6 list-none text-mid">
          <li>
            <Link className="no-underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="no-underline" to="/ai-chatbot">
              AI Chatbot
            </Link>
          </li>
          <li>
            <Link className="no-underline" to="/ai-image-generator">
              AI Image Generator
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-6">
        <Link to="/login" className="no-underline">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full space-x-3">
            Login
          </button>
        </Link>
        <Link to="/signup" className="no-underline">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full space-x-3">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
