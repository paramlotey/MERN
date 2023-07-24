import React from "react";
import CarouselComponent from "./carousel";
import welcomeImg from "./Images/welcome-image.png"

const Home = () => {
  return (
    <>
      <h1>Welcome to My Website</h1>
      <CarouselComponent></CarouselComponent>
      <div className="d-flex">
        <img src={welcomeImg} className="img-fluid" />
        <div className="matter">
          <h1>Welcome!</h1>
          <p>
            {" "}
            The bond of matrimony is regarded as the purest there is in this
            living planet. Marriages are said to not only unite two souls
            together, but also two families as a whole. However, families to be
            merged don't fall out of the sky. A certain source is required to
            reach your ideal partner, Ramagarhia Anand Karaj operates with the
            sole mission of bringing two individuals together on the same
            platform to interact and get to know each other in order to
            establish a successful marital relationship.
            <br />
            <br />
          </p>
          <p>
            We are a source to help you write your destiny and find your other
            half. Our services are renowned to have produced several successful
            marriages ever since our establishment. Ramagarhia Anand Karaj
            firmly acknowledges that we do not have the right to put anyone's
            lives on stake. For this very reason, we aim on helping each
            individual on a personal level due to which, additionally, our
            services are marked for its quality. Delete all kinds of fear from
            your heart and mind as we are, indeed, your well-wishers and meeting
            your needs of finding your perfect match is the mission of our
            foundation.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
