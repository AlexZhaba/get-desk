import React, { useEffect, useState } from "react";
import LeftSearchBarComponent from "../../components/LeftSearchBarComponent/LeftSearchBarComponent";
import SearchMapContainer from "../../containers/SearchMapContainer/SearchMapContainer";

const SearchPage = () => {
  const [isFullMap, setIsFullMap] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = (event) => {
      const width = event.currentTarget.innerWidth;
      setWindowWidth(width);
    }

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [])

  useEffect(() => {
    if (windowWidth < 1400) {
      if (isFullMap) {
        // setIsFullMap(false);
        if (!openMap) setOpenMap(true);
      }
    } else {
      if (openMap) {
        setOpenMap(false);
        setIsFullMap(true);
      }
    }
    if (windowWidth <= 950) {
      if (!openMap) setOpenMap(true);
    }
  }, [windowWidth]);


  return (
    <div className={`search ${isFullMap ? "search__left" : ""}`}>
      <LeftSearchBarComponent
        isFullMap={isFullMap}
        openMap={openMap}
        setOpenMap={setOpenMap}
        mobile={windowWidth <= 950}
      />
      <SearchMapContainer
        isFullMap={isFullMap}
        setIsFullMap={setIsFullMap}
        openMap={openMap}
        setOpenMap={setOpenMap}
        windowWidth={windowWidth}
      />
      {/*<div id="map" style={{width: "500px", height: "400px"}}>*/}

      {/*</div>*/}
    </div>
  )
}

export default SearchPage;
