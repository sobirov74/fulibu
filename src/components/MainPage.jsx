import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import LoginPage from "./Header/LoginPage/LoginPage";
import MainNews from "./MainNews/MainNews";
import MainRegister from "./MainRegister/MainRegister";
import MainTop from "./MainTop/MainTop";
import ApiService from "../ApiService/ApiService";

const MainPage = () => {
  const [recommend, setRecommend] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiService.getResources("/main")
      .then((res) => {
        console.log(res);
        setRecommend(res.recommend);
      })
      .finally(() => setLoading(false));
  }, []);

  // console.log(recommend);
  if (loading) return <div style={{ height: 500 }}>loading...</div>;
  return (
    <>
      <main>
        <MainTop />
        <MainRegister recommend={recommend} />
        <MainNews />
      </main>

      <Footer />
    </>
  );
};

export default MainPage;
