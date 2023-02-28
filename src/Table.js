import * as React from "react";
import * as opportunities from "./opportunities.json";
import RowDataModalItem from "./rowDataModalItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

//styling properties of pop up modal box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
  height: "80%"
};

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;

  //local state management//open or close modal//set current row of data
  const [open, SetOpen] = React.useState(false);
  const [currentRowData, SetRowData] = React.useState("");

  //clickhandler to open modal with current row data passed in
  function handleRowClick(event, row, i) {
    console.log(`row: ${row} & i: ${i}`);
    SetRowData(i);
    SetOpen(true);
  }

  //next row clickhandler, returns to beginning if at end of array
  function nextRowClick() {
    console.log("in nextRowClick", currentRowData);
    const j = currentRowData + 1;
    data[j] ? SetRowData(j) : SetRowData(0);
  }

  //previous row clickhandler, reverts to end of array if first item
  function previousRowClick() {
    console.log("in previousRowClick", currentRowData);
    const j = currentRowData - 1;
    j === -1 ? SetRowData(data.length - 1) : SetRowData(j);
  }

  //clickhandler to close modal, clears local current data state
  function handleClose() {
    SetOpen(false);
    SetRowData("");
  }

  // USD formatter
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <div className="App">
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <RowDataModalItem currentRowData={data[currentRowData]} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "100px"
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "100px" }}
                onClick={previousRowClick}
              >
                <ArrowBackIosIcon />
                Prev
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100px", ml: "150px", mr: "150px" }}
                onClick={handleClose}
              >
                Close
                <CloseIcon />
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100px" }}
                onClick={nextRowClick}
              >
                Next
                <ArrowForwardIosIcon />
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
      <div className="dataTable">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ bgcolor: "black" }}>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="left"
                >
                  Opp Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="left"
                >
                  Opp Stage
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="center"
                >
                  Rep Probability
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="center"
                >
                  PX Probability
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="center"
                >
                  PX Tier
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="right"
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="left"
                >
                  Product
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "white" }}
                  align="left"
                >
                  Sales Rep
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow
                  onClick={(event) => handleRowClick(event, row, i)}
                  key={row.oppId}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(odd)": {
                      backgroundColor: "#4bdcb4"
                    },
                    "&:nth-of-type(even)": {
                      backgroundColor: "#74AEFA"
                    },
                    "&:hover": {
                      backgroundColor: "lightgray",
                      transform: "scale3d(1.00, 1.01, 1)"
                    },
                    "&:click": { backgroundColor: "gray" }
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.oppName}
                  </TableCell>
                  <TableCell align="left">{row.stage}</TableCell>
                  <TableCell align="center">{row.repProbability}</TableCell>
                  <TableCell align="center">{row.pppppProbability}</TableCell>
                  <TableCell align="center">{row.pppppTier}</TableCell>
                  <TableCell align="right">
                    {moneyFormatter.format(row.amount)}
                  </TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell align="left">{row.salesRepName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
