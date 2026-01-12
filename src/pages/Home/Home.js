import { Fragment } from "react/jsx-runtime";
import { HotelCard, Navbar } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="main">
        <HotelCard />
      </main>
    </Fragment>
  );
};
