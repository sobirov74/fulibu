import React, { useEffect, useState } from "react";
import  initialState  from "../MainPage";

//   const [recommend, setRecommend] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [xits, setXits] = useState([])
//   const [newest, setNewest]  = useState([])

//   useEffect(() => {
//     ApiService.getResources("/main")
//       .then((res) => {
//         console.log(res);
//         setRecommend(res.recommend);
//         setXits(res.hot)
//         setNewest(res.newest)
//       })
//       .finally(() => setLoading(false));
//   }, []);

  // console.log(recommend);


export const postsReducer = (state = initialState, action) => {
    return state
}