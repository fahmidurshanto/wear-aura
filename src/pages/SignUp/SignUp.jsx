import React from 'react';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full md:w-[30%]">
        <div className="w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">User Sign Up</h1>
          <form className="space-y-4">
            <div className="flex flex-col w-full">
              <label htmlFor="user-name" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="user-name"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="user-email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="user-email"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="user-password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="user-password"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="user-confirm-password" className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="user-confirm-password"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 rounded-md hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 ease-in-out"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;