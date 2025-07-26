import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [active,setactive] = useState("home");
  return (
    <>
      <div className="text-white bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 shadow-lg border-b border-zinc-600 h-20 flex justify-between items-center font-mono p-10">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              SkillScaler
            </h1>
            <p className="text-xs text-zinc-400 -mt-1">Test Your Skills</p>
          </div>
        </div>
        <div className="text-lg flex gap-9">
          <Link to="/" className={`hover:text-green-600 ${active === "home" && "text-green-600"}`} onClick={()=> setactive("home")}>
            Home
          </Link>
          <Link to="/create-test" className={`hover:text-green-600 ${active === "create-test" && "text-green-600"}`}  onClick={()=> setactive("create-test")}>
            CreateTest
          </Link>
          <Link to="/your-test" className={`hover:text-green-600 ${active === "your-test" && "text-green-600"}`} onClick={()=> setactive("your-test")}>
            YourTests
          </Link>
          <Link to="/performance" className={`hover:text-green-600 ${active === "performance" && "text-green-600"}`}  onClick={()=> setactive("performance")}>
            Performance
          </Link>
          <Link to="/profile" className={`hover:text-green-600 ${active === "profile" && "text-green-600"}`}  onClick={()=> setactive("profile")}>
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
