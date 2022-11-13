const axios = require("axios");
const { response } = require("express");

const { CSVToJSON } = require("../utils.js");

const URL = "https://echo-serv.tbxnet.com/v1/secret";
const token = "aSuperSecretKey";
const config = { headers: { authorization: `Bearer ${token}` } };

module.exports = {
  get: async (req, res) => {
    if (req.query.fileName === undefined) {
      try {
        let payload = [];
        let response = null;
        try {
          response = await axios.get(URL + "/files", config);
        } catch (err) {
          throw err.data;
        }
        if (response !== null) {
          await Promise.all(
            response.data["files"].map(async (file) => {
              try {
                let res = await axios.get(URL + `/file/${file}`, config);
                let data = CSVToJSON(res.data);
                payload = payload.concat(data);
              } catch (err) {
                console.log("error find file : ", file, err.data);
              }
            })
          );
        } else {
          throw "NOT WORK";
        }
        payload = payload.filter(
          (item) =>
            item.file !== "file" &&
            item.text !== "text" &&
            item.number !== "number" &&
            item.he !== "hex"
        );
        res.status(200).send(payload);
      } catch (e) {
        res.status(404).send("ERROR : Not Found : " + e);
      }
    } else {
      try {
        const { fileName } = req.query;
        let response = await axios.get(URL + `/file/${fileName}`, config);
        let payload = CSVToJSON(response.data);
        payload = payload.filter(
          (item) =>
            item.file !== "file" &&
            item.text !== "text" &&
            item.number !== "number" &&
            item.he !== "hex"
        );
        res.status(200).send(payload);
      } catch (e) {
        res.status(404).send("ERROR : Not Found : " + e);
      }
    }
  },
  getList: async (req, res) => {
    try {
      let response = null;
      try {
        response = await axios.get(URL + "/files", config);
      } catch (err) {
        throw err.data;
      }
      res.status(200).send(response.data["files"]);
    } catch (e) {
      res.status(404).send("ERROR : Not Found : " + e);
    }
  },
};
