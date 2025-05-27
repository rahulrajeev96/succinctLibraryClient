import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import AllVideos from "../components/AllVideos";
import AllCategories from "../components/AllCategories";

const Home = () => {
  const [addVideoResponse, setAddVideoResponse] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState([]); 
  return (
    <div>
      <div className="container my-3 d-flex justify-content-between">
        <Add setAddVideoResponse={setAddVideoResponse} />
        <button className="btn btn-secondary btn-sm my-2 ">
          <Link to={"/history"} className="text-decoration-none">
            {" "}
            HISTORY TAB
          </Link>
        </button>
      </div>

      <div className="container-fluid row">
        <div className="col-lg-4">
          <AllVideos addVideoResponse={addVideoResponse} deleteVideoResponse={deleteVideoResponse} />
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <AllCategories setDeleteVideoResponse={setDeleteVideoResponse} />
        </div>
      </div>
    </div>
  );
};

export default Home;
