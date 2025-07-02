// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { FiMenu, FiUser, FiX, FiSun, FiMoon } from "react-icons/fi";
// import { FaSignOutAlt } from "react-icons/fa";

// export default function Navbar() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedTheme = localStorage.getItem("theme");

//     if (storedUser) setUser(JSON.parse(storedUser));
//     if (storedTheme === "dark") {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   // Sync across tabs
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const storedUser = localStorage.getItem("user");
//       setUser(storedUser ? JSON.parse(storedUser) : null);
//     };
//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   const toggleTheme = () => {
//     if (darkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setDarkMode(!darkMode);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setDropdownOpen(false);
//     router.push("/authpage");
//   };

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-all">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
//             ClimaTalk
//           </Link>

//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">Home</Link>
//             <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">About</Link>
//             <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">Blog</Link>
//             <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">Contact</Link>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button onClick={toggleTheme} className="hidden md:flex text-gray-700 dark:text-gray-300">
//               {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
//             </button>

//             {user ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//                 >
//                   <FiUser size={20} />
//                   <span>{user.name}</span>
//                 </button>

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
//                     <button
//                       onClick={logout}
//                       className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//                     >
//                       <FaSignOutAlt className="mr-2" /> Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link href="/authpage" className="hidden md:flex bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Login
//               </Link>
//             )}
//           </div>

//           <button onClick={toggleTheme} className="md:hidden text-gray-700 dark:text-gray-300">
//             {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
//           </button>
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div onClick={() => setIsOpen(false)} className="md:hidden bg-white dark:bg-gray-900 shadow-md">
//           <Link href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
//           <Link href="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
//           <Link href="/blog" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Blog</Link>
//           <Link href="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>

//           {user ? (
//             <button onClick={logout} className="block w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
//               Logout
//             </button>
//           ) : (
//             <Link href="/authpage" className="block w-full px-4 py-2 bg-blue-600 text-white text-center hover:bg-blue-700">
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }


//////////////////////////////////////////////////////


"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu, FiUser, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedTheme = localStorage.getItem("theme");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    router.push("/authpage");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
            ClimaTalk
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">About</Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">Blog</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="hidden md:flex text-gray-700 dark:text-gray-300">
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hidden md:flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FiUser size={20} />
                  <span>{user.name || "Account"}</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    <button
                      onClick={logout}
                      className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/authpage" className="hidden md:flex bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Login
              </Link>
            )}
          </div>

          <button onClick={toggleTheme} className="md:hidden text-gray-700 dark:text-gray-300">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
          <Link href="/blog" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Blog</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>

          {user ? (
            <button onClick={logout} className="block w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              Logout
            </button>
          ) : (
            <Link href="/authpage" className="block w-full px-4 py-2 bg-blue-600 text-white text-center hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
