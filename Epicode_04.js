import React from "react";
import ReactDOM  from "react-dom/client";
import Heading from "./src/components/Header";
import {Body} from "./src/components/Body";
//heading



//body

// const ResturentCard = (props) =>{
//     const {resData} = props;
//     //hear we can deSturcture it for better readability
//     const {cloudinaryImageId,name,avgRating,deliveryTime,costForTwo,cuisines} = resData?.info;  //?. This is optional chaining
//     return (
//         <div className="res-card">

//           {resData && resData.info && (
//               <React.Fragment>
//                   <img className="res-logo" alt="res-card" 
//                   src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
//                   <h3>{name}</h3>
//                   <div className="heading-container">
//                   <span> <h4>⭐{avgRating }</h4> </span>
//                   <span><h4 className="h4">•{resData.info.sla.deliveryTime } minites</h4></span>

//                   </div>
//                   <h5>{cuisines.join(", ")}</h5>
//                   <h4>{costForTwo}</h4>
//               </React.Fragment>
//           )}
            
//         </div>
//     );
// }



// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">

//               {/* hear we use map for reandering in ResturentCard */}
//               {
//                 resList.map((resturent) =>(
//                   <ResturentCard key = {resturent.info.id} resData = {resturent} />
//                 ))
//               }

//                 {/* <ResturentCard resData = {resList[0]} />
//                 <ResturentCard resData = {resList[1]} />
//                 <ResturentCard resData = {resList[2]} />
//                 <ResturentCard resData = {resList[3]} />
//                 <ResturentCard resData = {resList[4]} />
//                 <ResturentCard resData = {resList[5]} />
//                 <ResturentCard resData = {resList[6]} />
//                 <ResturentCard resData = {resList[7]} />
//                 <ResturentCard resData = {resList[8]} /> */}



//                 {/* <ResturentCard
//                   resName = "Burger King"
//                   Reating = "⭐4.3 .29 min"
//                   cuisine = "Burger,American,Kolkata Township"
//                 /> */}
//                 {/* <ResturentCard
//                   resName = "Burger King"
//                   Reating = "⭐4.3 .29 min"
//                   cuisine = "Burger,American,Kolkata Township"
//                 />
//                 <ResturentCard
//                     resName = "KFC"
//                     Reating = "⭐4.2 .32 min"
//                     cuisine = "Chicken Fride,newTown"
//                 />
//                 <ResturentCard
//                   resName = "Burger King"
//                   Reating = "⭐4.3 .29 min"
//                   cuisine = "Burger,American,Kolkata Township"
//                 />

//                 <ResturentCard
//                     resName = "KFC"
//                     Reating = "⭐4.2 .32 min"
//                     cuisine = "Chicken Fride,newTown"
//                 /> */}

//             </div>
//         </div>
//     );
// }

const Layout = () => {
    return (
        <div className="app">
            <Heading/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);