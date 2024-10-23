import c from "./mainStyle.module.css";

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
  //arr.pageNum
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
        <h2 className={c.textAni}>{value[arr.pageNum].text}</h2>
      </div>
      <div className={c.sideTwo}>
        <img className={c.rightImg} src={rightPage} />
        <h2 className={c.textAni}>{value[arr.pageNum + 3].text}</h2>
      </div>
    </>
  );
}
