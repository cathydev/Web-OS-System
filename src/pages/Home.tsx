import { useState, useEffect } from "react";
import Login from "../components/Login/Login";
import Screen from "../components/Screen/Screen";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const postData = async(): Promise<void> => {
      const username = process.env.NEXT_PUBLIC_CORREOS_USERNAME;
      const password = process.env.NEXT_PUBLIC_CORREOS_PASSWORD;
      const endpoint= process.env.NEXT_PUBLIC_CORREOS_URL;
      const base64encodedData = btoa(`${username}:${password}`);

      if (endpoint) {
        fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": `Basic ${base64encodedData}`,
          },
          body: JSON.stringify({
            solicitante: "yo",
           
          }),
        }).then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      }
    };
    postData();
  }, []);


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
