import React, { useState, useEffect, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css'
import "./style.scss";

import SearchOptionsComponent from "../SearchOptionsComponent/SearchOptionsComponent";
import OfferListComponent from "../OfferListComponent/OfferListComponent";

import mapExpand from "../../assets/mapExpandWhite.svg";


const LeftSearchBarComponent = ({ isFullMap, openMap, setOpenMap, mobile }) => {
  const [expandOnContentDrag, setExpandOnContentDrag] = useState(true);
  const [open, setOpen] = useState(false);
  const [fullMode, setFullMode] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const [snapPoints, setSnapPoints] = useState([
    [
      maxHeight * 0.4,
      115,
    ]
  ])
  const sheetRef = useRef()

  useEffect(() => {
    setOpen(true)
  }, [])

  useEffect(() => {
    if (mobile) {
      setSnapPoints([
        maxHeight - 70,
        maxHeight * 0.4,
        115,
      ])
    } else setSnapPoints([
      maxHeight * 0.4,
      115,
    ])
  }, [mobile, maxHeight])

  if (openMap) {
    return (
      <>
        <div></div>
        <BottomSheet
          ref={sheetRef}
          open={open}
          skipInitialTransition
          defaultSnap={({ maxHeight }) => maxHeight / 2}
          blocking={false}
          onSpringStart={() => {
            console.log('Transition from:', sheetRef.current.height)
            requestAnimationFrame(() =>
              console.log('Transition to:', sheetRef.current.height)
            )
          }}
          onSpringEnd={() => {
            // if (sheetRef.current.height > 300) {
            //   setFullMode(true);
            // } else setFullMode(false);
            // console.log('Finished transition to:', sheetRef.current.height)
          }}
          defaultSnap={({ maxHeight }) => setMaxHeight(maxHeight)}
          snapPoints={({ maxHeight }) => snapPoints}
        >
        <div className="search__mobile">
          {!fullMode &&
            <div className="search__mobile-title">
              Более <span style={{color: "#ED4040"}}>300</span> вариантов офисных помещений по заданым параметрам.
            </div>
          }
          {fullMode &&
            <div style={{height: 50}}>
            </div>
          }
          <OfferListComponent mobile={mobile} />
        </div>
        </BottomSheet>
      </>
    );
  };
  return (
    <div className={`search__left-search-bar${isFullMap ? "-closed" : ""}`}

    >
      <div className="search__title">
        Аренда офиса: Москва
      </div>
        <SearchOptionsComponent />
        <OfferListComponent />
        {!openMap &&
          <div className="search__open-map" onClick={() => setOpenMap(true)}>
            <img src={mapExpand} alt=""/>
            <span>Развернуть карту</span>
          </div>
        }
    </div>
  )
};

export default LeftSearchBarComponent;
