import "./HotelCard.css";

export const HotelCard = () => {
  return (
    <div className="hotelcard-container shadow cursor-pointer relative">
      <div className="">
        <img
          className="img"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200"
          alt="hotelcard"
        />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">Bir, Himachal Pradesh</span>
            <span className="rating d-flex align-center">
              <span class="material-icons-outlined">star</span>
              <span>4.3</span>
            </span>
          </div>
          <p className="hotel-name">Sukoon Bag</p>
          <p className="price-details">
            <span className="price">Rs. 3500</span>
            <span>Night</span>
          </p>
        </div>
        <button className="button btn-wishlist absolute">
          <span class="material-icons favorite cursor">favorite</span>
        </button>
      </div>
    </div>
  );
};
