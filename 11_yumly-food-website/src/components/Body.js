import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
  const [listOfRestaurants,setlistOfRestaurants]=useState([]);
  const [filteredRestaurants,setfilteredRestaurants]=useState([]);
  const [searchText,setsearchText]=useState("");
   useEffect(()=>{
    fetchData();
    console.log("effect called");
   },[]);

   const fetchData=async()=>{
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.950277486607053&lng=88.3796540647745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      
      console.log(json?.data);
      
      setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
      
    return listOfRestaurants.length===0 ?(
       <Shimmer/>
      ) :(
        <div className="body">
       <div className="filter">
        <div className="search">
          <input className="search-input" id="search-txt" type="text" value={searchText} onChange={
            (e)=>{
              setsearchText(e.target.value);
            }}/>
          <button className="search-btn"
          onClick={()=>{
            var searchText =document.getElementById("search-txt").value;
            console.log(searchText);
            const filteredListOfRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setsearchText("");
           setfilteredRestaurants(filteredListOfRestaurants);
        
          }}>Search</button>
         </div>
        <button className="filter-btn"
         onClick={()=>{
          const filteredListOfRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating > 4);
          setfilteredRestaurants(filteredListOfRestaurants);
          console.log(filteredListOfRestaurants);
         }
        }
         >
          Top restaurant</button>
       </div>
       <div className="res-container">
        {
         filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
        
        } 
        </div>
        </div>
    );
};
export default Body;