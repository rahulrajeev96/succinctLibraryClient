import React from "react";
import { Card } from "react-bootstrap";
import "./VideoCard.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addHistory, deleteVideoApi } from "../../services/allAPI";

const VideoCard = ({ videos, setDeleteVideoRes, insideAllCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const currentDate = new Date();
    const caption = videos.caption;
    const link = videos.youtubeLink;
    const reqObj = {
      currentDate,
      caption,
      link,
    };
    console.log(currentDate);
    let result = await addHistory(reqObj);
    console.log(result);

    setShow(true);
  };

  const deleteVideo = async (vidId) => {
    let result = deleteVideoApi(vidId);
    setDeleteVideoRes(result);
    console.log(result);
  };
  const videoDrag = (e, id) => {
    console.log(e);
    console.log(id);
    e.dataTransfer.setData("videoId", id);
  };
  console.log(videos);

  return (
    <>
      <Card
        Each Category="true"
        onDragStart={(e) => videoDrag(e, videos?.id)}
        style={{ padding: 20, width: "12rem" }}
        className="tech-card row "
      >
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>

        <Card.Img
          onClick={handleShow}
          variant="top"
          src={videos?.imageURL}
          className="tech-card-img"
          onError={(e) => {
            e.target.src = "path-to-default-image.jpg"; // Add fallback image
          }}
        />

        <Card.Body className="tech-card-body ">
          <div className="d-flex justify-content-between align-items-center">
            <h5 style={{ textAlign: "left" }} className="tech-card-title">
              {videos?.caption}
            </h5>
            {insideAllCategory ? (
              <span></span>
            ) : (
              <button
                onClick={() => deleteVideo(videos?.id)}
                className="btn tech-card-button"
              >
                <i className="fa-solid fa-trash fa-shake"></i>
              </button>
            )}
          </div>
        </Card.Body>

        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>
      </Card>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${videos?.youtubeLink}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
