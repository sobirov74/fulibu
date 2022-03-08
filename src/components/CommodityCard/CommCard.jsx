import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ApiService from "../../ApiService";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import CommTop from "./CommTop";

const CommCard = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setLoading(true);
      ApiService.getResources(`/book/${id}`)
        .then((value) => {
          if (value.statusCode === 200) {
            setBook(value.data);
            setLoading(false);
          }
        })

        .catch((e) => {
          setLoading(false);
        });
      // send request to serve
    }
  }, [id]);

  if (loading && !book) return <Loading />;

  return (
    <>
      <main>
        <div className="container">
          <CommTop data={book} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CommCard;
