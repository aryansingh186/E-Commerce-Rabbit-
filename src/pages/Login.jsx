import  { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.webp"; // Replace with your login image
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      toast.success("Login successful! 🎉");
      localStorage.setItem("isLoggedIn", "true");
      // Redirect or navigate to home page here if using useNavigate
    } else {
      toast.error("Invalid email or password ");
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border-2 shadow-xl"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Hey there! ✋</h2>

          <p className="text-center mb-6">Enter your email and password</p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Sign In
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-fit h-full mr-4 bg-gray-800">
        <div className="flex flex-col justify-center items-center">
          <img
            src={loginImg}
            alt="Login to an account"
            className="h-[650px] w-[700px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
