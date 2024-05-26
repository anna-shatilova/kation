import { firebaseConfig } from "./firebase";
import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${firebaseConfig.databaseURL}/Services.json`);
    
    if (response.data) {
      const data = response.data;
      console.log(data);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};
