import { CDN_URL } from "./constants";
import React from "react";
const RestaurantCard = (
  /*cloudinaryImageId,
  name,
  cuisines,
avgRatingString,*/
info,
) => {
  
   return (

    <div className="resto">
      <img src={CDN_URL +info?.imageId} />
     
      <h2>{info?.action?.text}</h2>
      {/* <h3>{info?.action.text}</h3>
      <h4>{info?.avgRatingString} Stars</h4>
      <h5>{info?.costForTwo}</h5>
      <h6>{info?.deliveryTime}minutes</h6> */}
    </div>
  );
};
export default RestaurantCard;
