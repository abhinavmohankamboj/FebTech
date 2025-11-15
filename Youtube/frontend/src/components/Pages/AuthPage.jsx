import React, { useState } from "react";
import axios from "axios";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const url = isSignup
      ? "http://localhost:3000/api/signup"
      : "http://localhost:3000/api/login";

    let postData;
    // don't manually set Content-Type for FormData — the browser/axios will add the boundary
    let config = { withCredentials: true };

    if (isSignup) {
      // send form-data when uploading avatar
      const formData = new FormData();
      formData.append("FullName", fullName);
      formData.append("Username", username);
      formData.append("Email", email);
      formData.append("Password", password);
      if (avatarFile) formData.append("avatar", avatarFile);
      postData = formData;
    } else {
      postData = { Email: email, Password: password };
    }


    try {
      const res = await axios.post(url, postData, config);
      setMessage(isSignup ? "✅ Signup successful!" : "✅ Login successful!");
      console.log("Server Response:", res.data);

      // if server returned user info, persist locally so Header can read it
      if (res.data && res.data.user) {
        try {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } catch (e) {
          console.warn("Could not save user to localStorage", e);
        }
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Network or validation error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Card Container */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Logo"
            className="w-32"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          {isSignup ? "Create your account" : "Sign in"}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          to continue to YouTube Clone
        </p>

        {message && (
          <div className="mb-4 text-sm text-center text-red-500">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
              <div className="w-full">
                <label className="text-sm text-gray-600">Profile picture (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAvatarFile(e.target.files[0])}
                  className="w-full mt-1"
                />
              </div>
            </>
          )}

          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />

          <div className="flex justify-between items-center text-sm">
            {!isSignup && (
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition"
          >
            {loading
              ? isSignup
                ? "Signing up..."
                : "Signing in..."
              : isSignup
              ? "Sign up"
              : "Next"}
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <button
          onClick={() => setIsSignup(!isSignup)}
          className="mt-4 w-full border border-gray-300 rounded py-2 font-medium hover:bg-gray-100"
        >
          {isSignup ? "Already have an account? Sign in" : "Create account"}
        </button>
      </div>

      <footer className="text-xs text-gray-500 mt-6">
        © 2025 YouTube Clone • Powered by Abhinav Mohan
      </footer>
    </div>
  );
}
