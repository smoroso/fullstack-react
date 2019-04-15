"use strict";

import express from "express";
import { getForm } from "./services/form_service";
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));
app.get("/api/getForm", (req, res) => res.send(getForm()));
app.listen(port, () => console.log(`Listening on port ${port}!`)); // eslint-disable-line no-console

export default app;
