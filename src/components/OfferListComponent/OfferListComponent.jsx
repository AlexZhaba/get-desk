import React from "react";
import OfferItemComponent from "./OfferItemComponent";

const OfferListComponent = ({ mobile }) => {
  return (
    <div className={`search__offer offer-list ${mobile ? "offer-list-mobile" : ""}`}>
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
      <OfferItemComponent mobile={mobile} />
    </div>
  );
};

export default OfferListComponent;
