import AnimatedText from "../Animated/AnimatedText";

function Home() {
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-purple-800 h-screen w-screen">
      <div className="flex">
        {/* Header */}
        <div className="flex pt-4 pl-[180px] gap-10">
          <a
            className="trakcing-widest font-serif   text-slate-100 text-[30px]"
            href="#"
            aria-label="Sumniaci"
          >
            Sumniaci
          </a>

          <nav className="text-[15px] text-slate-100 flex pt-3 gap-6">
            <a href="#">Home</a>
            <a href="#">Studio</a>
            <a href="#">Wosk</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="flex">
          <div className="pl-[500px] pt-7 text-slate-100">Seacrh</div>
          <div className=" text-slate-100 pt-6 pl-8">
            <button
              type="button"
              className="cursor-pointer p-2 rounded-md bg-pink-600"
            >
              Hire Now
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <AnimatedText />
        <div className="flex ">
          <div className="text-slate-100 pl-48 pt-3">
            <div className="bg-slate-100 w-[18px] h-[2px]"></div>
          </div>
          <div className="text-pink-600 font-bold pl-6">What we Do</div>
        </div>
        <div className="pl-48 pt-6 text-slate-100">
          Lorem ipsum dolor sit,
          <br />
          amet consectetur adipisicing elit.
          <br />
          Atque labore aliquid tenetur
          <br /> quibusdam nemo tempore,dolore
          <br /> veniam sint placeat cum eveniet
          <br /> adipisci nulla dignissimos pariatur?
        </div>
        <div className="pl-48 pt-6">
          <button
            type="button"
            className="bg-pink-600 cursor-pointer p-2 rounded-md"
          >
            Sumbit
          </button>
        </div>
        <div className="size-96 ml-[850px] mt-[-380px]">
          <img
            src="src/Home/—Pngtree—cute cartoon astronaut hugging rocket_6464125.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
