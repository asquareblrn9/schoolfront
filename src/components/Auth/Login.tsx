import React from "react";

const Login = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <div className="mb-5">
              <img
              src="images/nochsolutions.com.ng-logonew.png"
              alt="nochsolutions logo"
              className=""
              width={80}
            />
            </div>
            <div className="mb-5">
              <h1 className="text-1xl text-gray-500 font-semibold">Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="block text-base mb-2">Email</label>
              <input type="email" className="border rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-blue" id="username" placeholder="Email Address"/>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-base mb-2">Password</label>
              <input type="password" className="border rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-blue" id="password" placeholder="Email Address"/>
            </div>

            <div>
              <a href="/" className="text-indigo text-base align-right">Forgot Password</a>
            </div>

            <div className="mt-5">
              <button className="border-2 border-primary bg-primary text-white py-2 px-2 w-full rounded shadow-lg text-xl">Login</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
