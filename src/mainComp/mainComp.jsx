import { useEffect, useState } from "react";
import c from "./mainStyle.module.css";

import mainPic from "../public/book_bg.png";
import leftPage from "../public/page2.png";
import rightPage from "../public/page3.png";

import value from "./info";
import PageFlip from "./pageFlip";
import PageFlipBack from "./pageFlipBack";

export default function BookComp(props) {
  // page num

  console.log(props.children);

  useEffect(() => {

    

  }, [])
  

  const [pageNum, setPageNum] = useState(0);

  // selected pages
  const [firstPage, setFirstPage] = useState({});
  const [secondPage, setSecondPage] = useState({});

  const [page1Flip, setPage1Flip] = useState([]);
  const [page2Flip, setPage2Flip] = useState([]);

  const [lastIndex, setLastIndex] = useState(1000); // needs to reset after the animations all stop
  const [lastIndex2, setLastIndex2] = useState(1000); // needs to reset after the animations all stop

  // needs to stop if other animation is called
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

  function startAnimationBack() {
    let startIndex = 1001;
    setLastIndex2(lastIndex2 - 1);

    setPage2Flip((prev) => [
      ...prev,
      <PageFlipBack
        key={Math.random()}
        arr={page2Flip.length}
        pageNum={pageNum + 1}
        funToRem={remFirst}
        lastNum={lastIndex2}
        zIn={startIndex}
      />,
    ]);
  }

  function removeFirstItem() {
    setPage1Flip((prevArray) => prevArray.slice(1));
  }

  function remFirst() {
    setPage2Flip((prevArray) => prevArray.slice(1));
  }

  function changePage(operator) {
    if (operator) {
      startAnimation();
      setPageNum(pageNum + 2);

      setSecondPage(value[pageNum + 3]);

      setTimeout(() => {
        setFirstPage(value[pageNum + 2]);
      }, 4000);
    } else {
      startAnimationBack();
      setPageNum(pageNum - 2);

      setFirstPage(value[pageNum - 2]);
      setTimeout(() => {
        if (value[pageNum - 3] === undefined) {
          setFirstPage(value[0]);
        } else {
          setSecondPage(value[pageNum - 1]);
        }
      }, 4000);
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
        <div className={c.divAnimation}>
          {page1Flip}
          {page2Flip}
        </div>
      </div>
      <div className={c.buttonsDiv}>
        <h2 className={c.num}>{pageNum}</h2>
        <button
          onClick={() => {
            if (pageNum > 0) {
              changePage(false);
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (pageNum < value.length - 2) {
              changePage(true);
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
