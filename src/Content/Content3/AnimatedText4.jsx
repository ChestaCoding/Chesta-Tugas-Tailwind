import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const [text, setText] = useState("");
  const fullText =
    "Devolopment";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText((prevText) => {
        const nextChar = fullText[index];

        // Mengatasi masalah nilai undefined
        return nextChar ? prevText + nextChar : prevText;
      });

      index++;

      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // useEffect will run once when the component mounts

  return (
    <div className="text-slate-100 font-bold pt-48 pl-48 text-[50px] select-none cursor-pointer hover:text-pink-400">
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimatedText;
