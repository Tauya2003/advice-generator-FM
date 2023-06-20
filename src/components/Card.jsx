import React, { useEffect, useState } from "react";
import Dice from "../assets/icon-dice.svg";
import DividerMobile from "../assets/pattern-divider-mobile.svg";
import DividerDesktop from "../assets/pattern-divider-desktop.svg";

const Card = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [advice, setAdvice] = useState({
    id: 117,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action",
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getAdvice = async () => {
    const URL = `https://api.adviceslip.com/advice?${Math.random()}`;
    const response = await fetch(URL);
    const data = await response.json();

    setAdvice({ id: data.slip.id, text: data.slip.advice });
    // console.log(data.slip.id);
  };

  return (
    <div className="card">
      <h3>
        Advice #<span id="advice_id">{advice.id}</span>
      </h3>
      <p id="advice_text">"{advice.text}"</p>

      <div className="divider_container">
        {width <= 800 ? (
          <img src={DividerMobile} alt="divider pattern" />
        ) : (
          <img src={DividerDesktop} alt="divider pattern" />
        )}
      </div>

      <div className="dice_container" onClick={getAdvice}>
        <img src={Dice} alt="Dice Icon" />
      </div>

      {/* <button id="button" onClick={getAdvice}>
        Click Me
      </button> */}
    </div>
  );
};

export default Card;
