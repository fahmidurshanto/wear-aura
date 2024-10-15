
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">User Login</h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="user-email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="user-email"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="user-password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="user-password"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 rounded-md hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
        <div className="h-full w-4 bg-gradient-to-b from-purple-500 to-pink-500 mx-8 md:hidden" />
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Admin Login</h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="admin-email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="admin-email"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="admin-password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="admin-password"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-2 rounded-md hover:bg-gradient-to-r from-green-600 to-teal-600 transition-all duration-200 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;