import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg shadow-md p-16 w-full max-w-lg h-auto">
        <div className="flex flex-col text-center space-y-10">
          <h2 className="font-extrabold text-3xl">Sign Up</h2>
          <form className="flex flex-col space-y-8">
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-full px-6 py-4"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-full px-6 py-4"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-full px-6 py-4"
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
            <button className="bg-blue-500 text-white px-4 py-1 mb-9 rounded-full hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
