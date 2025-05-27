import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getVideoApi, uploadVideoApi } from "../../services/allAPI";
import { Await } from "react-router-dom";


const AllVideos = ({ addVideoResponse, deleteVideoResponse }) => {
  const [videosData, setVideosData] = useState([]);
  const [deleteVideoRes, setDeleteVideoRes] = useState([]);

  useEffect(() => {
    getVideos();
  }, [addVideoResponse, deleteVideoRes, deleteVideoResponse]);

  const getVideos = async () => {
    let result = await getVideoApi();
    if (result.status >= 200 && result.status <= 300) {
      setVideosData(result.data);
    } else {
      alert("error fetching video data");
    }
    console.log(result);
  };

  const onDragVideoDrop = (e) => {
    e.preventDefault();
  };

  const onVideoDrop = async(e) => {
    console.log(e);
    let VideoData =JSON.parse(e.dataTransfer.getData('videoFromCategory'))
    console.log(VideoData);
    await uploadVideoApi(VideoData)
     await getVideos();
    
  };
  return (
    <>
      <h1> Video Contents</h1>

      <Row style={{marginLeft:" 35px", minWidth: "60vw" ,marginTop:"50px" ,paddingRight:"100px"}}
      className="rounded border p-5 bg-white "
      



        droppable="true"
        onDragOver={(e) => onDragVideoDrop(e)}
        onDrop={(e) => onVideoDrop(e)}
      >
        {videosData?.map((eachVideos, index) => (
          <Col key={index} className="" lg={3} >
            <VideoCard
              videos={eachVideos}
              setDeleteVideoRes={setDeleteVideoRes}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllVideos;
