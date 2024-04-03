import express from "express";
import {
  create,
  deleteStu,
  findByname,
  getStu,
  getStuone,
  ubdateStu,
} from "../controller/stucontrl.js";

const route = express.Router();

route.post("/createstu", create);
route.get("/findStu", findByname);
route.get("/getstu", getStu);

route.get("/getonestu/:id", getStuone);

route.put("/updateStu/:id", ubdateStu);

route.delete("/deletestu/:id", deleteStu);
export default route;
