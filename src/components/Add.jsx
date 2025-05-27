
import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { uploadVideoApi } from "../../services/allAPI";

// import uploadVideoApi from "../../services/allAPI";

const Add = ({setAddVideoResponse}) => {
  const [show, setShow] = useState(false);
  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageURL: "",
    youtubeLink: "",
  });

  const convertID = (videourl) => {
    if (videourl.includes(".be/")) {
      console.log(videourl.slice(17, 28));
      let videoID = videourl.slice(17, 28);

      setVideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoID}`,
      });
    } else {
      setInvalidYoutubeLink(true);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addClick = async () => {
   if(videoDetails.caption && videoDetails.imageURL&& videoDetails.youtubeLink){ 
    let result = await uploadVideoApi(videoDetails);
    console.log(result);
    if (result.status >=200 &&result.status<=300){
      alert("successfully added your video")
      setAddVideoResponse(result)
      handleClose()
    }else{
      alert("something went wrong please call the admin ")
    }
  }else{
    alert("please fill the form ")
  }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <h3 style={{ margin: 0 }}>Upload New Videos</h3>
        <Fab
          onClick={handleShow}
          aria-label="add"
          sx={{
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgb(254, 17, 197)",
            "&:hover": {
              backgroundColor: "rgb(200, 10, 150)", // Darker shade on hover
              transform: "scale(1.1)", // Slightly enlarge on hover
            },
            transition: "all 0.3s ease", // Smooth transition
          }}
        >
          <AddIcon />
        </Fab>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title className="f">Upload Video Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" border rounded p-3 m-2">
            <TextField
              onChange={(e) =>
                setVideoDetails({ ...videoDetails, caption: e.target.value })
              }
              style={{ backgroundColor: "rgb(255, 0, 212)" }}
              className="text-color-white"
              id="videoTitle"
              label="Video Title"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "pink", // Change border color on hover
                  },
                },
                width: "420px", // Increase the length
                marginBottom: "20px", // Add space below
              }}
            />
            <TextField
              onChange={(e) =>
                setVideoDetails({ ...videoDetails, imageURL: e.target.value })
              }
              style={{ backgroundColor: "rgb(255, 0, 212)" }}
              id="videoImage"
              label="Video Image URL"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "pink", // Change border color on hover
                  },
                },
                width: "420px", // Increase the length
                marginBottom: "20px", // Add space below
              }}
            />
            <TextField
              onChange={(e) => convertID(e.target.value)}
              style={{ backgroundColor: "rgb(255, 0, 212)" }}
              id="VideoUrl"
              label="Upload the URL"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "pink", // Change border color on hover
                  },
                },
                width: "420px", // Increase the length
              }}
            />
            {invalidYoutubeLink ? (
              <span className="text-danger fw-bolder text-center justify-content-center align-items-center">
                invalid youtube link{" "}
              </span>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={invalidYoutubeLink} onClick={addClick} variant="light">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;