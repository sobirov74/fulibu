import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import LoginPage from "./Header/LoginPage/LoginPage";
import MainNews from "./MainNews/MainNews";
import MainRegister from "./MainRegister/MainRegister";
import MainTop from "./MainTop/MainTop";
import ApiService from "../ApiService/ApiService";

let initialState = {
  xits: [],
  recommend: []
}
 export const MainPage = () => {
  const [recommend, setRecommend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [xits, setXits] = useState([])
  const [newest, setNewest]  = useState([])

  useEffect(() => {
    ApiService.getResources("/main")
      .then((res) => {
        console.log(res);
        setRecommend(res.recommend);
        setXits(res.hot)
        setNewest(res.newest)
      })
      .finally(() => setLoading(false));
  }, []);


  
initialState = {
  xits: xits,
  recommend: recommend,
}

  // console.log(recommend);
  if (loading) return <div>loading...</div>;
  return (
    <>
      <main>
        <MainTop />
        <MainRegister recommend={recommend} />
        <MainNews data={xits} newest={newest} />
      </main>

      <Footer />
    </>
  );
};

// export default MainPage;
export default initialState
