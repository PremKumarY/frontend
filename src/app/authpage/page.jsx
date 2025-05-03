// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function AuthPage() {
//   const router = useRouter();

//   const [isLogin, setIsLogin] = useState(true);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = isLogin
//       ? { email, password }
//       : { fullName, email, password };

//     const endpoint = isLogin
//       ? "http://localhost:8000/api/login"
//       : "http://localhost:8000/api/signup";

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Something went wrong");

//       alert(data.message);

//       if (isLogin) {
//         // Save user to localStorage
//         localStorage.setItem("user", JSON.stringify(data.user));
//         router.push("/main");
//       } else {
//         setIsLogin(true); // Show login form
//         router.push("/authpage");
//       }
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-400 hover:underline ml-1"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>

//         <div className="mt-4 text-center">
//           <Link href="/" className="text-gray-400 hover:underline">
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState(""); // For email verification success message
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (searchParams.get("verified") === "1") {
      setMessage("✅ Email verified successfully! You can now login.");
    }
  }, [searchParams]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = isLogin ? { email, password } : { fullName, email, password };

    const endpoint = isLogin
      ? "http://localhost:8000/api/login"
      : "http://localhost:8000/api/signup";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.message || "Something went wrong");

      alert(data.message);

      if (isLogin) {

        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/main");
        
      } else {
        alert("Check your email to verify your account");
        setIsLogin(true);
        router.push("/authpage");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Email verification success message */}
        {message && (
          <div className="bg-green-600 text-white px-4 py-2 rounded mb-4 text-center">
            {message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:underline ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
