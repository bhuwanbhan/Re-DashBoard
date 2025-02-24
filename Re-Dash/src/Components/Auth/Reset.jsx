import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import man from "../Auth/man.png";

function Reset() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/dashboard"); 
  };

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="container px-6 py-2 w-full max-w-4xl bg-white shadow-2xl rounded-lg flex flex-wrap">
        {/* Left Side Image */}
        <div className="hidden lg:block w-1/2 rounded-2xl  ">
          <img src={man} className=" mt-20 ms-5 rounded-2xl w-80 h-80  shadow-2xl " />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 px-6   ">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
         
            <div className="relative mb-4">
              <label htmlFor="email" className="text-gray-600">
               Full Name
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

         
            <div className="relative mb-4">
              <label htmlFor="password" className="text-gray-600">
                Email
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                  <div className="relative mb-4">
              <label htmlFor="email" className="text-gray-600">
               Username
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-gray-600">
                password
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-gray-600">
                repeat password
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-4 ms-15">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 "
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <p className=""> I agree to the <span className="text-gray-500"> terms of user  </span> </p>
              </label>
              {/* <Link to="/forgot-password" className="text-blue-500">
                Forgot password?
              </Link> */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Sign Up
            </button>

            {/* Social Login */}
            {/* <div className="my-4 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <p className="mx-4 mb-0 text-center font-semibold text-gray-600">
                OR
              </p>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            {/* <a
              className="mb-3 flex w-full items-center justify-center rounded bg-blue-600 px-7 py-2 text-white hover:bg-blue-700 transition"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
            >
              Continue with Facebook
            </a>
            <a
              className="mb-3 flex w-full items-center justify-center rounded bg-blue-500 px-7 py-2 text-white hover:bg-blue-600 transition"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
            >
              Continue with X
            </a> */} 

            {/* Signup Link */}
            {/* <p className="text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reset;
