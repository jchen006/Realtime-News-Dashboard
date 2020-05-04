import React, { useEffect } from "react";
import { CoronavirusConfirmedChart } from "client/features/coronavirus-confirmed-chart";
import { CoronaviursNewsfeed } from "client/features/coronavirus-newsfeed";
import { VerticalTabs } from "client/components/VerticalTabs";
import { TopBar } from "client/components/TopBar";
import { useRouter } from "next/router";
import { SocketIOProvider } from "use-socketio";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import MediaCard from "client/components/Card";
import { useDispatch } from "react-redux";
import { showModal } from "client/actions/appAction";
import { useHotkeys } from "react-hotkeys-hook";
import { Modal } from "client/components/Modal";

const DynamicWorldMap = dynamic(() => import("client/components/WorldMap"), {
  ssr: false,
});

const props = {
  latitude: -0.09,
  longitude: 51.505,
  data: {
    city: [
      {
        name: "Tokyo",
        coordinates: [139.6917, 35.6895],
        population: 37843000,
      },
      {
        name: "Jakarta",
        coordinates: [106.865, -6.1751],
        population: 30539000,
      },
      {
        name: "Delhi",
        coordinates: [77.1025, 28.7041],
        population: 24998000,
      },
      {
        name: "Seoul",
        coordinates: [126.978, 37.5665],
        population: 23480000,
      },
      {
        name: "Shanghai",
        coordinates: [121.4737, 31.2304],
        population: 23416000,
      },
      {
        name: "Karachi",
        coordinates: [67.0099, 24.8615],
        population: 22123000,
      },
      {
        name: "Beijing",
        coordinates: [116.4074, 39.9042],
        population: 21009000,
      },
      {
        name: "Mumbai",
        coordinates: [72.8777, 19.076],
        population: 17712000,
      },
      {
        name: "Osaka",
        coordinates: [135.5022, 34.6937],
        population: 17444000,
      },
      {
        name: "Moscow",
        coordinates: [37.6173, 55.7558],
        population: 16170000,
      },
      {
        name: "Dhaka",
        coordinates: [90.4125, 23.8103],
        population: 15669000,
      },
      {
        name: "Bangkok",
        coordinates: [100.5018, 13.7563],
        population: 14998000,
      },
      {
        name: "Kolkata",
        coordinates: [88.3639, 22.5726],
        population: 14667000,
      },
      {
        name: "Istanbul",
        coordinates: [28.9784, 41.0082],
        population: 13287000,
      },
    ],
    minLat: -6.1751,
    maxLat: 55.7558,
    minLong: 37.6173,
    maxLong: 139.6917,
  },
};

// const socketIoOptions = {
//   path: "",
//   reconnection: realTime,
//   timeout: 2000,
//   autoConnect: realTime,
// };

const tabs = [
  {
    label: "Maps",
    component: () => (
      <>
        <h1> Test </h1>
        <MediaCard>
          <DynamicWorldMap {...props} />
        </MediaCard>
      </>
    ),
  },
  {
    label: "Heat Maps",
    component: () => <h1> Heat Map </h1>,
  },
  {
    label: "Chart 1",
    component: () => <h1> Chart 1 </h1>,
  },
];

function CoronavirusDashboard() {
  const router = useRouter();
  const realTime = Boolean(router.query.realTime);
  const dispatch = useDispatch();

  const handleOpenSettingsModal = () => {
    dispatch(showModal());
  };

  useHotkeys("s", handleOpenSettingsModal);

  // <SocketIOProvider url="http://localhost:8081" opts={socketIoOptions}>
  // </SocketIOProvider>

  return (
    <Container maxWidth="xl" style={{ padding: 0, height: "100vh" }}>
      <CssBaseline />
      <TopBar />
      <Modal>
        <h1> Test </h1>
      </Modal>
      <Grid container alignItems="stretch" style={{ height: "100%" }}>
        <Grid item xs={9}>
          <VerticalTabs tabs={tabs} />
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: "grey" }}>
          content
          {/* <CoronaviursNewsfeed /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CoronavirusDashboard;
