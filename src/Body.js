// NewPage.jsx
import React from "react";
import { useState, useEffect } from "react";
import { resList } from "./constants";
import RestaurantCard from "./RestaurantCard";


function Body() {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);


  function filterData(searchText) {
    console.log('filteredRestaurants',filteredRestaurants, searchText);
    const filteredData = filteredRestaurants.filter((restaurant) =>
      restaurant?.action?.text
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
    console.log('filteredData',filteredData);
    setFilteredRestaurants(filteredData)
    return filteredData;
  }



  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );
    setAllRestaurants(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="Search"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            // setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resList">
        {filteredRestaurants?.map((restaurants) => {
          return <RestaurantCard key={restaurants.id} {...restaurants} />;
        })}
      </div>
    </>
  );
}

export default Body;
