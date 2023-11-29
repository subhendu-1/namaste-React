import React from "react";
// import { CDN_URL } from "../utils/constantes";
import CDN_URL from  "../utils/constantes"
export const ResturentCard = (props) =>{
    const {resData} = props;
    //hear we can deSturcture it for better readability
    const {cloudinaryImageId,name,avgRating,deliveryTime,costForTwo,cuisines} = resData?.info;  //?. This is optional chaining
    return (
        <div className="res-card">

          {resData && resData.info && (
              <React.Fragment>
                  <img className="res-logo" alt="res-card" 
                  src={CDN_URL+ cloudinaryImageId} />
                  <h3>{name}</h3>
                  <div className="heading-container">
                  <span> <h4>⭐{avgRating }</h4> </span>
                  <span><h4 className="h4">•{resData.info.sla.deliveryTime } minites</h4></span>

                  </div>
                  <h5>{cuisines.join(", ")}</h5>
                  <h4>{costForTwo}</h4>
              </React.Fragment>
          )}
            
        </div>
    );
}

// export default ResturentCard;