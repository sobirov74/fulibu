import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import MainNews from "./MainNews/MainNews";
import MainRegister from "./MainRegister/MainRegister";
import MainTop from "./MainTop/MainTop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import Loading from "./Loading/Loading";
import { FetchReload } from "../redux/postReducer";

export const MainPage = () => {
  const { loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const fetchData = () => dispatch(fetchPosts());
  useEffect(() => {
    fetchData();
  }, []);

  if (loading || error) {
    return <Loading loading={loading} error={error} reload={fetchData} />;
    // return <div>loading...</div>;
  }

  return (
    <>
      <main>
        <MainTop />
        <MainRegister />
        <MainNews />
      </main>

      <Footer />
    </>
  );
};

export default MainPage;
