import React, { useState } from "react";

import SpecificationsComponent from "./SpecificationsComponent";
import PriceComponent from "./PriceComponent";
import BookingComponent from "./BookingComponent";
import ComfortComponent from "./ComfortComponent";

const SearchOptionsComponent = () => {
  const [activeOption, setActiveOption] = useState("price");

  return (
    <div className="search__options-list">
      <PriceComponent activeOption={activeOption} setActiveOption={setActiveOption} />
      <SpecificationsComponent activeOption={activeOption} setActiveOption={setActiveOption} />
      <BookingComponent activeOption={activeOption} setActiveOption={setActiveOption} />
      <ComfortComponent activeOption={activeOption} setActiveOption={setActiveOption} />
    </div>
  );
};

export default SearchOptionsComponent;
