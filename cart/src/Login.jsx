import React, { useState } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();

  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");

  const [password, setPassword] = useState("123");

  if (loggedIn) {
    return null;
  }

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin" />
      </span>

      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white right-0"
          style={{ width: 300, top: "2rem" }}
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm text-black border-gray-400 p-2 rounded-md w-full "
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm text-black border-gray-400 p-2 rounded-md w-full mt-10 "
          />

          <button
            onClick={() => login(username, password)}
            className="bg-green-900 text-white py-2 px-5 rounded-md mt-10"
            id="loginBtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
