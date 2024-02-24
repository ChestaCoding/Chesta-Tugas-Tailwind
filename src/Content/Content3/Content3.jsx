import AnimatedText3 from "./AnimatedText3";
import AnimatedText4 from "./AnimatedText4";
import AnimatedText5 from "./AnimatedText5";
import AnimatedText6 from "./AnimatedText6";
import AnimatedText7 from "./AnimatedText7";

function Content3() {
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-purple-800 h-screen w-screen">
      <div className="flex">
        {/* Header */}
        <div className="flex"></div>
      </div>

      {/* Content */}
      <div className="content">
        <AnimatedText3 />
        <AnimatedText4 />
        <AnimatedText5 />
        <AnimatedText6 />
        <AnimatedText7 />
        <div className="size-96 ml-[850px] mt-[-380px]">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content3;
