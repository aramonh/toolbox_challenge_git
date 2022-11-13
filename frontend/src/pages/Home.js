import React from "react";
import { Box, TextField, Grid, IconButton } from "@mui/material";
import axios from "axios";
import "../assets/effects.scss";
import { SERVER_HOST } from "../config";
import Table from "react-bootstrap/Table";
import SearchIcon from "@mui/icons-material/Search";
const Home = () => {
  const [textSearch, setTextSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleChangeText = (event) => {
    setTextSearch(event.target.value);
  };

  const handleSearch = () => {
    let config = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    if (textSearch !== "") {
      axios
        .get(`${SERVER_HOST}/files/data?fileName=${textSearch}`, config )
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          setData([]);
        });
    } else {
      axios
        .get(`${SERVER_HOST}/files/data`, config )
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          setData([]);
        });
    }
  };

  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seccionStyle = {
    mx: "auto",
    my: "auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          my: 3,
          width: "100vw",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          sx={{ ...seccionStyle }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item lg={12} sx={seccionStyle}>
            <Box sx={{ mx: "auto", my: 2, textAlign: "center" }}>
              <TextField
                id="outlined-name"
                label="Search by fileName"
                value={textSearch}
                onChange={handleChangeText}
                sx={{ maxWidth: 600, minWidth: 300, mx: "auto" }}
              />
              <IconButton
                onClick={handleSearch}
                aria-label="delete"
                size="large"
              >
                <SearchIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Grid>
          <Table striped bordered hover responsive sx={seccionStyle}>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, indx) => (
                <tr key={indx}>
                  <td>{item.file}</td>
                  <td>{item.text}</td>
                  <td>{item.number}</td>
                  <td>{item.hex}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
