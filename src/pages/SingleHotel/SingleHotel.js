import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HotelImages, Navbar } from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const [singleHotel, setSingleHotel] = useState();

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels/${id}`
        );
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const { name, state } = singleHotel;

  return (
    <Fragment>
      <Navbar />
      {singleHotel && (
        <main className="single-hotel-page">
          <p className="hotel-name-add">
            {name}, {state}
          </p>
          <HotelImages singleHotel={singleHotel} />
        </main>
      )}
    </Fragment>
  );
};
