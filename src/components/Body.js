import {ResturentCard} from "./ResturentCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

  // let listOfResturent = [ 
  //   {
  //     "info": {
  //       "id": "375041",
  //       "name": "Andhra Gunpowder",
  //       "cloudinaryImageId": "byilgyrcfz690ryoasww",
  //       "locality": "6th Block",
  //       "areaName": "Koramangala",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Andhra",
  //         "Biryani",
  //         "South Indian"
  //       ],
  //       "avgRating": 3.8,
  //       "feeDetails": {
  //         "restaurantId": "375041",
  //         "totalFee": 3000
  //       },
  //       "parentId": "10496",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 16,
          
  //       },
 
  //       "badges": {
  //         "textExtendedBadges": [
  //           {
  //             "iconId": "guiltfree/GF_Logo_android_3x",
  //             "shortDescription": "options available",
  //             "fontColor": "#7E808C"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
              
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "",
  //                   "fontColor": "#7E808C",
  //                   "iconId": "guiltfree/GF_Logo_android_3x",
  //                   "shortDescription": "options available"
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "₹100 OFF",
  //         "subHeader": "ABOVE ₹349",
  //         "discountTag": "FLAT DEAL"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       }
  //     },
  //     "analytics": {
        
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
  //       "type": "WEBLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "25620",
  //       "name": "KFC",
  //       "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
  //       "locality": "Intermediate Ring Road",
  //       "areaName": "Ejipura",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "Biryani",
  //         "American",
  //         "Snacks",
  //         "Fast Food"
  //       ],
  //       "avgRating": 4.1,
  //       "feeDetails": {
  //         "restaurantId": "25620",
  //         "fees": [
  //           {
  //             "name": "BASE_DISTANCE",
  //             "fee": 3700
  //           },
  //           {
  //             "name": "BASE_TIME"
  //           },
  //           {
  //             "name": "ANCILLARY_SURGE_FEE"
  //           }
  //         ],
  //         "totalFee": 3700
  //       },
  //       "parentId": "547",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "10K+",
  //       "sla": {
  //         "deliveryTime": 18,
  //         "lastMileTravel": 0.9,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "18 mins",
  //         "lastMileTravelString": "0.9 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2023-11-23 23:00:00",
  //         "opened": true
  //       },
  //       "badges": {
          
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
              
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "EVERY ITEM",
  //         "subHeader": "@ ₹179"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       }
  //     },
  //     "analytics": {
        
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
  //       "type": "WEBLINK"
  //     }
  //   },
  // ];

  const [listOfResturent,setlistOfResturent] = useState(resList);
    return (
        <div className="body">
          {/* Top rate restro */}
          <div className="filtter">
            <button 
            className="filt_btn"
              onClick={() =>{
                const  filterData =  listOfResturent.filter(
                  (res) => res.info.avgRating > 4
                );
                setlistOfResturent(filterData);
              }}
            >Top rated restro</button>

          </div>
            
            <div className="res-container">

              {/* hear we use map for reandering in ResturentCard */}
              {
                listOfResturent.map((resturent) =>(
                  <ResturentCard key = {resturent.info.id} resData = {resturent} />
                ))
              }

                {/* <ResturentCard resData = {resList[0]} />
                <ResturentCard resData = {resList[1]} />
                <ResturentCard resData = {resList[2]} />
                <ResturentCard resData = {resList[3]} />
                <ResturentCard resData = {resList[4]} />
                <ResturentCard resData = {resList[5]} />
                <ResturentCard resData = {resList[6]} />
                <ResturentCard resData = {resList[7]} />
                <ResturentCard resData = {resList[8]} /> */}



                {/* <ResturentCard
                  resName = "Burger King"
                  Reating = "⭐4.3 .29 min"
                  cuisine = "Burger,American,Kolkata Township"
                /> */}
                {/* <ResturentCard
                  resName = "Burger King"
                  Reating = "⭐4.3 .29 min"
                  cuisine = "Burger,American,Kolkata Township"
                />
                <ResturentCard
                    resName = "KFC"
                    Reating = "⭐4.2 .32 min"
                    cuisine = "Chicken Fride,newTown"
                />
                <ResturentCard
                  resName = "Burger King"
                  Reating = "⭐4.3 .29 min"
                  cuisine = "Burger,American,Kolkata Township"
                />

                <ResturentCard
                    resName = "KFC"
                    Reating = "⭐4.2 .32 min"
                    cuisine = "Chicken Fride,newTown"
                /> */}

            </div>
        </div>
    );
}