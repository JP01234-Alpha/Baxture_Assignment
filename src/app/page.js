"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import CardComponent from "./components/card";
import axios from "axios";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Home() {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res", res?.data);
        setData(res?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <MantineProvider theme={theme}>
      <div className="mainSection">
        <CardComponent data={data} setData={setData} />
      </div>
    </MantineProvider>
  );
}
