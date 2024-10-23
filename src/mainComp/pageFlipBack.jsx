import c from "./animationCss.module.css";

import leftPage from "../public/page2.png";
import rightPage from "../public/page3.png";

import value from "./info";
import { useState } from "react";

export default function PageFlipBack(arr) {
  const [hideDiv, setHideDiv] = useState(false);

  console.log(value[arr.pageNum - 1].page);
  console.log(value[arr.pageNum - 2].page);

  setTimeout(() => {
    setHideDiv(true);
    arr.funToRem();
  }, 4000);

  return (
    <>
      <div
        style={{
          zIndex: arr.zIn + arr.lastNum,
          display: hideDiv ? "none" : "block",
        }}
        className={c.sideOne}
      >
        <img className={c.imgLeftAni} src={leftPage} />
        <h2 className={c.textAni}>{value[arr.pageNum - 1].text}</h2>
      </div>
      <div className={c.sideTwo}>
        <img className={c.rightImg} src={rightPage} />
        <h2 className={c.textAni}>{value[arr.pageNum - 2].text}</h2>
      </div>
    </>
  );
}
