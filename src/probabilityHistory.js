import * as React from "react";
import { Typography, Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

export default function ProbababilityHistory(props) {
  //data manipulation to fit into Nivo graph accepted data parameters
  let mapDataPily = [];
  let mapDataRep = [];
  const probData = props.probabilityHistoryProps;
  const probDataMap =
    probData !== null &&
    probData.forEach((el, i) => {
      mapDataPily.unshift({ x: el.daysAgo, y: el.pppppProb });
      mapDataRep.unshift({ x: el.daysAgo, y: el.repProb });
      console.log("mapDataPily[]: ", mapDataPily);
      console.log("mapDataRep[]: ", mapDataRep);
    });
  let mapData = [
    {
      id: "ppppp Prob.",
      color: "hsl(166, 70%, 50%)",
      data: mapDataPily
    },
    {
      id: "Rep Prob.",
      color: "hsl(166, 70%, 50%)",
      data: mapDataRep
    }
  ];

  return (
    <>
      <Box sx={{ height: "481px" }}>
        {probData === null ? (
          <Typography>No Probability History Data Exists Yet</Typography>
        ) : (
          // Nivo graph
          <ResponsiveLine
            data={mapData}
            margin={{ top: 50, right: 50, bottom: 45, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Days",
              legendOffset: 36,
              legendPosition: "middle"
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Probability",
              legendOffset: -40,
              legendPosition: "middle"
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: -250,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />
        )}
      </Box>
    </>
  );
}
