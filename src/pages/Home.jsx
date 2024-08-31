import { useState, useEffect } from "react";
import Login from "../components/Login/Login";
import Layout from "../components/Layout/Layout";
import Screen from "../components/Screen/Screen";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isMounted) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [isMounted]);

  const handleToggleMount = () => {
    setIsMounted(!isMounted);
  };

  return (
    <>
      {loading ? (
        <Box sx={{ background: "lightblue", width: "100%", height: "100VH", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <CircularProgress />
        </Box>
      ) : isMounted ? (
        <Screen />
      ) : (
        <Login mount={handleToggleMount} />
      )}
    </>
  );
};

export default Home;
