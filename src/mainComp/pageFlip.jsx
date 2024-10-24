import c from "./animationCssMain.module.css";

import leftPage from "../public/page2.png";
import rightPage from "../public/page3.png";

import value from "./info";
import { useState } from "react";

export default function PageFlip(arr) {
  const [hideDiv, setHideDiv] = useState(false);

  setTimeout(() => {
    setHideDiv(true);
    arr.funToRem();
  }, 4000);

  return (
    <>
      <div className={c.sideOne}>
        <img className={c.imgLeftAni} src={leftPage} />
        <h2 className={c.textAni}>{value[arr.pageNum + 2].text}</h2>
      </div>
      <div
        style={{
          zIndex: arr.zIn + arr.lastNum,
          display: hideDiv ? "none" : "block",
        }}
        className={c.sideTwo}
      >
        <img className={c.rightImg} src={rightPage} />
        <h2 className={c.textAni}>{value[arr.pageNum + 1].text}</h2>
      </div>
    </>
  );
}
