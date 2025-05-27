import React from "react";
import { Link } from "react-router-dom";
import sucImg from "../assets/sucgifresize.gif";
import { Card } from "react-bootstrap";
import sucImg1 from "../assets/sucart.png";

const Landing = () => {
  return (
    <div className="container">
      {/* welcome section*/}
      <div className="row align-items-center ">
        <div className="col-lg-6">
          <h2>
            {" "}
            Welcome to{" "}
            <span className="text-secondary"> Succinct Library </span>{" "}
          </h2>
          <h4>
            <p style={{ textAlign: "justify" }}>
              Decentralized yet unified library where anyone can see the
              contributed contents and can contribute their own contents. it’s a
              proof-of-concept for disciplined thought, where contributors earn
              trust by distilling ideas to their essence, and readers gain
              instant access to signal instead of static. By enforcing
              succinctness as a first-class value, this platform will become a
              global showcase for efficient knowledge, a place where thinkers,
              creators, and learners can come together to share and discover.
            </p>
          </h4>
          <Link className="btn btn-secondary" to={"/home"}>
            {" "}
            Get Started{" "}
          </Link>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-4">
          <img
            style={{ height: 500, width: 500, padding: 30 }}
            src={sucImg}
            alt=""
          />
        </div>
        {/* featurees section */}
        <div className="col-lg-12">
          <h2 style={{ padding: 100 }} className="text-center text-secondary ">
            {" "}
            Features{" "}
          </h2>
          <div className="row text-center align-items-center">
            <div className="col-lg-4 ">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sucImg1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sucImg1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sucImg1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row text-center align-items-center">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={sucImg1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={sucImg1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={sucImg1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="bg-secondary text-white padding-10 mt-5">
          {/* Left Section */}

          <div
            style={{ padding: 50 }}
            className="container1 align-items-center"
          >
            <div className="row mx-30 my-30">
              <div className="col-lg-4">
                <h2 className="text-3xl font-semibold text-orange-500">
                  Simple, Fast and Powerful
                </h2>

                <div>
                  <h3 className="font-bold">Play Everything:</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, animi perspiciatis! Deleniti maxime.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Categorise Videos:</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, animi perspiciatis! Deleniti maxime.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Managing History:</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, animi perspiciatis! Deleniti maxime.
                  </p>
                </div>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-6">
                <div className="flex-1">
                 <iframe style={{ padding: 10}}
                    width="600"
                    height="350"
                    src="https://www.youtube.com/embed/hC0wRoUKF-0?si=OYXv7NfvWImRTZU3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen

                  ></iframe>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - YouTube Video */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
