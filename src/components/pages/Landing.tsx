import React, { useState } from "react";
import { materials } from "../materials";
import { SignInUser } from "../services/userServices";
import { useNavigate } from "react-router-dom";
const Modal: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state

  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please enter your email and password to sign in.");
      return;
    }

    setLoading(true); // Start loading indicator

    try {
      const user = { email, password };
      const response = await SignInUser(user);
      if (response) {
        console.log("Sign-in successful:", user);
        navigate('/')
      } else {
        console.log("k")
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      console.log("k")
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500"
                placeholder="Enter your full name"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 text-white py-2 px-4 rounded-md w-full hover:bg-sky-500"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            className="text-sky-600 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Sign In" : "Create an account"}
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Landing: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="main-container font-popins">
        <h2 className="sm:mt-80 md:pt-4 flex justify-center text-sky-600 text-3xl top-0 mx-auto text-center font-extrabold">
          ABOUT EDUCAREHUB
        </h2>
        <p className="text-black text-center md:text-left mx-auto flex flex-wrap sm:text-lg md:text-xl lg:text-2xl my-5">
          We are committed to providing high-quality educational materials,
          uniforms, accessories, and essential services for students and their
          families. Our platform offers a convenient way to access everything
          your child needs, from stationery and school supplies to uniforms,
          electronic devices, and everyday services.
        </p>

        <div className="flex justify-between items-center w-full px-6 py-6">
          <h2 className="text-xl font-bold text-gray-800">Material</h2>
          <button onClick={() => setShowAll(true)}>See All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
          {materials.map((slide, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg shadow-md bg-[#e0e1e3]"
            >
              <img
                src={slide.imageURL}
                alt={slide.name}
                className="w-full h-56 bg-[#F4F5F7]"
              />
              <h2 className="text-sky-600 text-start text-2xl m-4 font-bold">
                {slide.name}
              </h2>

              <p className="text-black-400 text-start mx-4">
                {slide.description}
              </p>
              <div className="flex justify-between items-center p-4">
                <p className="text-black-400 text-start font-semibold">
                  {slide.price}
                </p>
                <button
                  onClick={handleBuyClick}
                  className="bg-sky-600 text-white p-2 rounded-full flex items-center hover:bg-blue-400 shadow-md"
                >
                  Buy
                  <svg
                    className="ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Landing;
