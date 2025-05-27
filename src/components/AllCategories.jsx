import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import {
  addCategory,
  deleteCategory,
  deleteVideoApi,
  getCategoryApi,
  getSingleVideo,
  updateCategory,
} from "../../services/allAPI";
import VideoCard from "./VideoCard";

const AllCategories = ({ setDeleteVideoResponse }) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryData, SetCategoryData] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const addCategoryCall = async () => {
    const reqObj = {
      categoryName,
      videos: [],
    };
    let result = await addCategory(reqObj);
    handleClose();
    await getAllCategory();
    console.log(result);

    console.log(categoryName);
  };

  const getAllCategory = async () => {
    let result = await getCategoryApi();
    SetCategoryData(result.data);
    console.log(result.data);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onVideoDrop = async (e, eachData) => {
    console.log(e);

    let videoId = e.dataTransfer.getData("videoId");
    let result = await getSingleVideo(videoId);
    eachData.videos.push(result.data);
    let updateResult = await updateCategory(eachData.id, eachData);
    if (updateResult.status === 200) {
      let delResult = await deleteVideoApi(videoId);
      setDeleteVideoResponse(delResult);
    }
    console.log(updateResult);
  };

  const onDragging = (e) => {
    e.preventDefault();
  };

  const onDeleteClick = async (id) => {
    await deleteCategory(id);
    await getAllCategory();
  };

  const onVideoDrag = async (e, Category, video) => {
    // console.log(e);
    // console.log(Category);
    // console.log(video);
    let stringData = JSON.stringify(video);
    console.log(stringData);

    e.dataTransfer.setData("videoFromCategory", stringData);

    let newVideoArray =  Category.videos.filter((item) => item.id != video.id);
    let id =Category.id;
    let categoryName =Category.categoryName
    console.log(newVideoArray);
    
   
    

    let reqObj = {
      id,
      categoryName,
      videos: newVideoArray,
    };

    let result = await updateCategory(id, reqObj);
     await getAllCategory();

     console.log(newVideoArray);
  };
  return (
    <>
      <div className="d-flex justify-content-around">
        <h1>All Categories</h1>
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
      {categoryData?.length > 0 ? (
        <div className="container-fluid mt-3">
          {categoryData?.map((eachData) => (
            <div
              droppable="true"
              onDragOver={(e) => onDragging(e)}
              onDrop={(e) => onVideoDrop(e, eachData)}
              key={eachData.id}
              className=" border rounded p-3 mb-3"
              style={{
                backgroundColor: "white",
                border: "1px solid #e0e0e0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                borderRadius: "12px",
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)", // Initial 3D state
                marginTop: "40px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">{eachData?.categoryName}</h3>
                <button
                  onClick={() => onDeleteClick(eachData.id)}
                  className="btn tech-card-button"
                >
                  <i className="fa-solid fa-trash fs-4"></i>
                </button>
              </div>
              <div>
                <div className="row ">
                  {eachData?.videos?.map((eachVideos) => (
                    <div
                      draggable="true"
                      onDragStart={(e) =>
                        onVideoDrag(e, eachData , eachVideos)
                      }
                      className="col-5"
                    >
                      {""}
                      <VideoCard videos={eachVideos} insideAllCategory={true} />
                      {""}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container-fluid mt-3 text-center py-5">
          <h3 className="text-muted">No Categories Found</h3>
        </div>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" border rounded p-3 m-2">
            <TextField
              onChange={(e) => setCategoryName(e.target.value)}
              style={{ backgroundColor: "rgb(255, 0, 212)" }}
              className="text-color-white"
              id="categoryName"
              label="Category Name"
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategoryCall} variant="light">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AllCategories;
