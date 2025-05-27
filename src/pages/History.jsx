import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteHistoryApi, getHistoryApi } from "../../services/allAPI";


const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = async () => {
    let result = await getHistoryApi();
    console.log(result.data);
    setHistoryData(result.data);
  };

  const deleteHistory= async(id)=>{
console.log(id);
await deleteHistoryApi(id);
getHistoryData()

  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ff69b4",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Watch History</h1>
        <Link to="/" className="btn btn-secondary text-light">
          <i className="fas fa-home me-2 text-light"></i>
          Back To Home
        </Link>
      </div>

      {/* Added margin top and ensured table is visible */}
      <div className="mt-4" style={{ overflowX: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">Caption</StyledTableCell>
                <StyledTableCell align="right">Link</StyledTableCell>
                <StyledTableCell align="right">Timestamp</StyledTableCell>
                <StyledTableCell align="right">...</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historyData?.map((eachHistory,index) => (
                <StyledTableRow key={index} >
                  <StyledTableCell component="th" scope="row"> {index+1}
                    {" "}
                    
                  </StyledTableCell> 
                  <StyledTableCell align="right"> {eachHistory?.caption} </StyledTableCell>
                  <StyledTableCell align="right"> {eachHistory?.link}</StyledTableCell>
                  <StyledTableCell align="right">{eachHistory?.currentDate}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={()=>deleteHistory(eachHistory.id)}className="btn tech-card-button">
                       <i className="fa-solid fa-trash fa-shake"></i>
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default History;
