import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData} = props;
    const {
      cloudinaryImageId,
         name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    }=resData?.info;

      return(
        <div className="res-card">
            
            <img className="res-logo" 
            src={CDN_URL+ cloudinaryImageId } alt="res-img"/>
         <div className="res-card-content">
            <h3>{name}</h3>
            <h4>{cuisines.join("\n")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            </div>
            
            </div>

      );
};
export default RestaurantCard;
