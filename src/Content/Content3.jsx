function Content3() {
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-purple-800 h-screen w-screen">
      {/* Content */}
      <div className="ml-56 text-slate-100 font-bold text-6xl selact-none cursor-pointer">
        <p className="pt-[106px] hover:text-pink-300">Design</p>
        <p className="pt-12 hover:text-pink-300">Development</p>
        <p className="pt-12 hover:text-pink-300">Illustration</p>
        <p className="pt-12 hover:text-pink-300">Product Design</p>
        <p className="pt-12 hover:text-pink-300">Social Media</p>
        <div className="ml-[700px] mt-[-400px]">
          <img
            src="src/Untitled2-removebg-preview.png"
            alt=""
            className="w-[400px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Content3;
