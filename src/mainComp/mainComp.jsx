import { useEffect, useState } from "react";
import c from "./mainStyle.module.css";

import mainPic from "../public/book_bg.png";
import leftPage from "../public/page2.png";
import rightPage from "../public/page3.png";

import value from "./info";
import PageFlip from "./pageFlip";

export default function BookComp() {
  //

  // page num
  const [pageNum, setPageNum] = useState(0);

  // selected pages
  const [firstPage, setFirstPage] = useState({});
  const [secondPage, setSecondPage] = useState({});

  const [page1Flip, setPage1Flip] = useState([]);

  const [lastIndex, setLastIndex] = useState(10000); // needs to reset after the animations all stop

  function startAnimation() {
    let startIndex = 1001;
    setLastIndex(lastIndex - 1);

    setPage1Flip((prev) => [
      ...prev,
      <PageFlip
        key={Math.random()}
        arr={page1Flip.length}
        pageNum={pageNum}
        funToRem={removeFirstItem}
        lastNum={lastIndex}
        zIn={startIndex}
      />,
    ]);
  }

  function removeFirstItem() {
    setPage1Flip((prevArray) => prevArray.slice(1));
  }

  useEffect(() => {
    console.log(page1Flip);
  }, [page1Flip]);

  function changePage(operator) {
    if (operator) {
      startAnimation();
      setPageNum(pageNum + 2);

      setFirstPage(value[pageNum + 2]);

      setTimeout(() => {
        setSecondPage(value[pageNum + 3]);
      }, 4000);
    } else {
      // false do it later
      setPageNum(pageNum - 2);
      // setInfoPages([value[pageNum - 2], value[pageNum - 1 - 2]]);
    }
  }

  useEffect(() => {
    setFirstPage(value[pageNum]);
    setSecondPage(value[pageNum + 1]);

    console.log(value[pageNum]);
  }, []);

  return (
    <>
      <div className={c.mainDiv}>
        <img className={c.mainImg} src={mainPic} />
        {/* mainInfo show */}
        <div className={c.divPages}>
          <div className={c.pageLeft}>
            <img className={c.pageStyleLeft} src={leftPage} />
            <div className={c.mainInfo}>
              {firstPage === null ? (
                <></>
              ) : (
                <>
                  <h2>{firstPage.text}</h2>
                  <p className={c.pageNum}>{firstPage.page}</p>
                </>
              )}
            </div>
          </div>
          <div className={c.pageRight}>
            <img className={c.pageStyleRight} src={rightPage} />
            <div className={c.mainInfo}>
              {secondPage === null ? (
                <></>
              ) : (
                <>
                  <h2>{secondPage.text}</h2>
                  <p className={c.pageNumRight}>{secondPage.page}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* div for animation */}
        <div className={c.divAnimation}>{page1Flip}</div>

        {/* end of animation div */}
      </div>
      <div className={c.buttonsDiv}>
        <h2 className={c.num}>{pageNum}</h2>
        <button
          onClick={() => {
            changePage(false);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            changePage(true);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

