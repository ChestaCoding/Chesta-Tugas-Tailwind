import AnimatedText2 from "../Animated/AnimatedText2";

const Content2 = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-purple-800 h-screen w-screen">
      <div className="ml-[650px]">
        <AnimatedText2 />
        <div className="flex ">
          <div className="text-slate-100 pl-48 pt-[17px]">
            <div className="bg-slate-100 w-[18px] h-[2px]"></div>
          </div>
          <div className="text-pink-600 font-bold pl-5 text-lg">Who we Are</div>
        </div>
        <div className="pl-48 pt-6 text-slate-100">
          a creative group of designers and devolopers with a passion for <br />
          the art
        </div>
        <div className="pl-48 pt-6">
          <button
            type="button"
            className="bg-pink-600 cursor-pointer p-2 rounded-md"
          >
            See our works
          </button>
        </div>
        <div className="size-96 ml-[850px] mt-[-400px]">
          <img src="" alt="" />
        </div>
      </div>

      <div className=" ml-72 mt-[-300px]">
        <img
          src="src/Untitled-removebg-preview.png"
          alt=""
          className="size-[350px]"
        />
      </div>
    </div>
  );
};

export default Content2;
