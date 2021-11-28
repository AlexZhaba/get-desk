import React, { useEffect, useState, useRef } from "react";
import { Loader } from 'google-maps';
import {Checkbox, DatePicker, Input, Divider, Slider, InputNumber} from "antd";
import Counter from "../../components/shared/Counter";

import "./style.scss";
import mapExpand from "../../assets/mapExpand.svg";
import FilterImg from "../../assets/filter.svg";
import Announcement from "../../assets/announcement.svg";

import MarkerDescription from "./MarkerDescription";
import FilterMobileComponent from "../../components/FilterMobileComponent";

const SearchMapContainer = ({ isFullMap, setIsFullMap, openMap, setOpenMap, windowWidth }) => {

  const mapRef = useRef(null);
  const [zoom, setZoom] = useState(13);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  useEffect(() => {
    async function loadMap() {
      const loader = new Loader("AIzaSyBm5huvGjpNP7Q5QmI6ymIBpLJ4WP0SLgU");

      const google = await loader.load();
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.7555, lng: 37.617},
        zoom,
        disableDefaultUI: true,
      });

      class Popup extends google.maps.OverlayView {
        position;
        containerDiv;
        constructor(position, content, callback) {
          super();
          this.position = position;
          content.classList.add("popup-bubble");
          content.addEventListener("click", (event) => {
            callback();
            console.log("popup-bubble");
            if (content.classList.contains("popup-bubble-active")) {
              content.classList.remove("popup-bubble-active");
            } else {
              clearModals();
              content.classList.add("popup-bubble-active");
            }
            event.stopPropagation();
          })
          // This zero-height div is positioned at the bottom of the bubble.
          const bubbleAnchor = document.createElement("div");

          bubbleAnchor.classList.add("popup-bubble-anchor");
          bubbleAnchor.appendChild(content);
          // This zero-height div is positioned at the bottom of the tip.
          this.containerDiv = document.createElement("div");
          this.containerDiv.classList.add("popup-container");
          this.containerDiv.appendChild(bubbleAnchor);
          // Optionally stop clicks, etc., from bubbling up to the map.
          Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
        }
        /** Called when the popup is added to the map. */
        onAdd() {
          this.getPanes().floatPane.appendChild(this.containerDiv);
        }
        /** Called when the popup is removed from the map. */
        onRemove() {
          if (this.containerDiv.parentElement) {
            this.containerDiv.parentElement.removeChild(this.containerDiv);
          }
        }
        /** Called each frame when the popup needs to draw itself. */
        draw() {
          const divPosition = this.getProjection().fromLatLngToDivPixel(
            this.position
          );
          // Hide the popup when it is far out of view.
          const display =
            Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
              ? "block"
              : "none";

          if (display === "block") {
            this.containerDiv.style.left = divPosition.x + "px";
            this.containerDiv.style.top = divPosition.y + "px";
          }

          if (this.containerDiv.style.display !== display) {
            this.containerDiv.style.display = display;
          }
        }
      }

      mapRef.current = map;

      const callback = (lat, lng) => {
        // map.setZoom(15);
      }

      let popup = new Popup(
        new google.maps.LatLng(55.7555, 37.617),
        document.getElementById("content"),
        () => callback(55.744, 37.646),
      );
      popup.setMap(map);

      let popup1 = new Popup(
        new google.maps.LatLng(55.7755, 37.637),
        document.getElementById("content_1"),
        () => callback(55.764, 37.676),
      );
      popup1.setMap(map);

      map.addListener("zoom_changed", () => {
        clearModals();
      })

    };
    loadMap();
  }, []);

  const clearModals = () => {
    [...document.getElementsByClassName("popup-bubble-active")].forEach(el => {
      el.classList.remove("popup-bubble-active");
      console.log("popup-bubble-active");
    })
  }

  return (
    <div className={`search__map-container${isFullMap ? "-full" : ""}`} onClick={() => null}
         style={openMap ? {
           flex: 1,
         } : { overflow: "hidden" }}
    >
      {windowWidth >= 1400 &&
        <>
          <div className="search__map-control">
          <div className="search__map-control__container">
            <div className="search__map-control__plus" onClick={() => {
              const currentZoom = Math.min(20, zoom + 1);
              clearModals();
              mapRef.current.setZoom(currentZoom);
              setZoom(currentZoom);
            }}/>
            <div className="search__map-control__minus" onClick={() => {
              const currentZoom = Math.max(0, zoom - 1);
              clearModals();
              mapRef.current.setZoom(currentZoom);
              setZoom(currentZoom);
            }}/>
          </div>
        </div>
          <div className="search__map-expand" onClick={() => setIsFullMap(!isFullMap)}>
          <img src={mapExpand} alt="" />
          <div className="search__map-open__text">Развернуть карту</div>
          </div>
          <div className="search__map-open">
          <Checkbox />
          <div className="search__map-open__text">Поиск при перемещении карты</div>
          </div>
        </>
      }
      {(windowWidth >= 950 && windowWidth < 1400) &&
        <>
          <div className="search__map-control" style={{
            top: 30,
            right: 40,
            left: "auto"
          }}>
            <div className="search__map-control__container">
              <div className="search__map-control__plus" onClick={() => {
                const currentZoom = Math.min(20, zoom + 1);
                clearModals();
                mapRef.current.setZoom(currentZoom);
                setZoom(currentZoom);
              }}/>
              <div className="search__map-control__minus" onClick={() => {
                const currentZoom = Math.max(0, zoom - 1);
                clearModals();
                mapRef.current.setZoom(currentZoom);
                setZoom(currentZoom);
              }}/>
            </div>
          </div>
          {/*<div className="search__map-expand" onClick={() => setIsFullMap(!isFullMap)}>*/}
          {/*  <img src={mapExpand} alt="" />*/}
          {/*  <div className="search__map-open__text">Развернуть карту</div>*/}
          {/*</div>*/}
          <div className="search__map-open" style={{
            top: 30,
            right: 104,
            left: "auto"
          }}>
            <Checkbox />
            <div className="search__map-open__text">Поиск при перемещении карты</div>
          </div>
          <div className="search__mobile-left" onClick={() => setOpenMap(false)}>
            <div className="search__map-open-mobile">
              <img src={Announcement} alt=""/>
              <div className="search__map-open__text">К списку объявлений</div>
            </div>
            <div className="search__map-open-mobile">
              <img src={FilterImg} alt=""/>
              <div className="search__map-open__text">Фильтры</div>
            </div>
          </div>
        </>
      }
      {windowWidth < 950 &&
        <>
          <div className="search__map-control" style={{
            top: 85,
            right: 20,
            left: "auto"
          }}>
            <div className="search__map-control__container">
              <div className="search__map-control__plus" onClick={() => {
                const currentZoom = Math.min(20, zoom + 1);
                clearModals();
                mapRef.current.setZoom(currentZoom);
                setZoom(currentZoom);
              }}/>
              <div className="search__map-control__minus" onClick={() => {
                const currentZoom = Math.max(0, zoom - 1);
                clearModals();
                mapRef.current.setZoom(currentZoom);
                setZoom(currentZoom);
              }}/>
            </div>
          </div>
          <div className="search__map-filter" onClick={() => setIsOpenFilter(!isOpenFilter)}>
            <img src={FilterImg} alt="" />
          </div>
          <div className="header__two-inputs search__map-inputs">
            <div className="header__input search__map-town">
              <Input
                placeholder="Выберите город"
                className="header__input-inner"
              />
            </div>
            <DatePicker className="header__date search__map-date" placeholder="Выберите дату" />
          </div>
        </>
      }
      {/*  Mobile Filter */}
      {isOpenFilter &&
        <FilterMobileComponent />
      }
      <div id="map" className="search__map">
        {/*style={{width: "940px", height: "100vh"}}*/}
      </div>
      <div id="content">
        <div className="marker__wrapper">
          <span>2 190 ₽</span>
          <MarkerDescription />
        </div>
      </div>
      <div id="content_1">
        <div className="marker__wrapper">
          <span>2 190 ₽</span>
          <MarkerDescription />
        </div>
      </div>

    </div>
  )
};

export default SearchMapContainer;
