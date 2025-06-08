import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Signup = () => {
  const { signup } = useAuthStore();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div>
      <div className="w-screen h-2/10 px-20 pt-5">
        <p className="font-mono text-4xl">Code Trail</p>
        <div className="bg-black w-4/5 h-0.5"></div>
      </div>
      <div className="mt-25 flex justify-center items-center bg-white">
        <div className="max-w-1/2 p-10 bg-white shadow-lg rounded-md flex flex-col gap-4">
          {/* Title */}
          <div className="flex justify-center">
            <p className="lg:text-4xl font-mono">Sign Up</p>
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-black font-mono gap-2"
          >
            <label htmlFor="username" className="text-xl font-mono">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              className="w-100 border-b border-black"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <label htmlFor="email" className="text-xl font-mono">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-100 border-b border-black"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label htmlFor="password" className="text-xl font-mono">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-100 border-b border-black"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div className="flex py-2 gap-2">
              <input type="checkbox" required />
              <Link to="/terms-and-condition">
                <label htmlFor="checkbox">
                  {" "}
                  I agree to the terms and condition
                </label>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-slate-800 text-white px-10 py-2 border-1 max-w-1/2"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center">
              <p>
                Already have an account ?{" "}
                <Link to="/login" className="text-blue-500">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
