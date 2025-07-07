/* ============================== IMPORTS ============================== */
import axios from "axios";

/* ============================== CONFIG ============================== */
export default axios.create({
  baseURL: "http://localhost:4000",
});
