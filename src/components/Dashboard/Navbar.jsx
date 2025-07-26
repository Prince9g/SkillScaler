const Navbar = () => {
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
          <a href="/" className="hover:text-green-600">
            Home
          </a>
          <a href="/" className="hover:text-green-600">
            CreateTest
          </a>
          <a href="/" className="hover:text-green-600">
            YourTests
          </a>
          <a href="/" className="hover:text-green-600">
            Performance
          </a>
          <a href="/" className="hover:text-green-600">
            Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
