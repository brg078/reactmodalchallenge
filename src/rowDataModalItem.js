import * as React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
import ProbababilityHistory from "./probabilityHistory";
import IncreasingWin from "./increasingWin";
import DecreasingWin from "./decreasingWin";

export default function RowDataModalItem(props) {
  //destructuring props
  const rowData = props.currentRowData;

  //local state management//data dive on history and factors
  const [currentHistoryFactors, setCurrentHistoryFactors] = React.useState(
    rowData.probabilityHistory
  );

  // USD formatter
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  //set state to Probability History
  function probabilityHistory() {
    console.log("in probabilityHistory", rowData.probabilityHistory);
    setCurrentHistoryFactors(rowData.probabilityHistory);
  }

  //set state to ppppp Factors Increasing Win
  function pppppFactorsIncreasingWin() {
    console.log(
      "in pppppFactorsIncreasingWin",
      rowData.pppppFactorsIncreasingWin
    );
    setCurrentHistoryFactors(rowData.pppppFactorsIncreasingWin);
  }

  //set state to ppppp Factors Decreasing Win
  function pppppFactorsDecreasingWin() {
    console.log(
      "in pppppFactorsDecreasingWin",
      rowData.pppppFactorsDecreasingWin
    );
    setCurrentHistoryFactors(rowData.pppppFactorsDecreasingWin);
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          {rowData.oppName && <Typography>{rowData.oppName}</Typography>}
        </Grid>
        <Grid item sx={{ textAlign: "right" }} xs={4}>
          {rowData.salesRepName && (
            <Typography>Sales Rep: {rowData.salesRepName}</Typography>
          )}
        </Grid>
        <Grid item xs={7}>
          {rowData.stage && <Typography>Stage: {rowData.stage}</Typography>}
        </Grid>
        <Grid item sx={{ textAlign: "right" }} xs={5}>
          {rowData.product && (
            <Typography>Product: {rowData.product}</Typography>
          )}
        </Grid>
        <Grid item sx={{ textAlign: "center" }} xs={12}>
          {rowData.amount && (
            <Typography>
              Amount (USD): {moneyFormatter.format(rowData.amount)}
            </Typography>
          )}
        </Grid>
        <Grid item sx={{ mt: "10px", textAlign: "center" }} xs={4}>
          {rowData.repProbability && (
            <Typography>Rep Probability: {rowData.repProbability}</Typography>
          )}
        </Grid>
        <Grid item sx={{ mt: "10px", textAlign: "center" }} xs={4}>
          {rowData.pppppTier && (
            <Typography>ppppp Tier: {rowData.pppppTier}</Typography>
          )}
        </Grid>
        <Grid item sx={{ mt: "10px", textAlign: "center" }} xs={4}>
          {rowData.pppppProbability && (
            <Typography>
              ppppp Probability: {rowData.pppppProbability}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Box>
        {currentHistoryFactors === rowData.probabilityHistory ? (
          <Button
            sx={{
              width: "200px",
              height: "55px",
              m: "17px",
              ml: "80px",
              bgcolor: "rgb(173, 207, 230, 0.4)"
            }}
            variant="outlined"
            onClick={probabilityHistory}
          >
            Probability History
          </Button>
        ) : (
          <Button
            sx={{ width: "200px", height: "55px", m: "17px", ml: "80px" }}
            variant="contained"
            onClick={probabilityHistory}
          >
            Probability History
          </Button>
        )}
        {currentHistoryFactors === rowData.pppppFactorsIncreasingWin ? (
          <Button
            sx={{
              width: "200px",
              height: "55px",
              m: "16px",
              bgcolor: "rgb(207, 230, 173, 0.3)"
            }}
            variant="outlined"
            onClick={pppppFactorsIncreasingWin}
          >
            ppppp Factors Increasing Win
          </Button>
        ) : (
          <Button
            sx={{ width: "200px", height: "55px", m: "16px" }}
            variant="contained"
            onClick={pppppFactorsIncreasingWin}
          >
            ppppp Factors Increasing Win
          </Button>
        )}
        {currentHistoryFactors === rowData.pppppFactorsDecreasingWin ? (
          <Button
            sx={{
              width: "200px",
              height: "55px",
              m: "17px",
              bgcolor: "rgb(250, 160, 160, 0.2)"
            }}
            variant="outlined"
            onClick={pppppFactorsDecreasingWin}
          >
            ppppp Factors Decreasing Win
          </Button>
        ) : (
          <Button
            sx={{ width: "200px", height: "55px", m: "17px" }}
            variant="contained"
            onClick={pppppFactorsDecreasingWin}
          >
            ppppp Factors Decreasing Win
          </Button>
        )}
      </Box>
      <Box>
        {currentHistoryFactors === rowData.probabilityHistory && (
          <ProbababilityHistory
            probabilityHistoryProps={currentHistoryFactors}
          />
        )}
        {currentHistoryFactors === rowData.pppppFactorsIncreasingWin && (
          <IncreasingWin increasingWinProps={currentHistoryFactors} />
        )}
        {currentHistoryFactors === rowData.pppppFactorsDecreasingWin && (
          <DecreasingWin decreasingWinProps={currentHistoryFactors} />
        )}
      </Box>
    </>
  );
}
