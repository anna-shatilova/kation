import { firebaseConfig } from "./firebase";
import axios from "axios";

// export const fetchData = async ({table}) => {
//   try {
//     const response = await axios.get(`${firebaseConfig.databaseURL}/${table}.json`);
    
//     if (response.data) {
//       const data = response.data;
//       console.log(data);
//     } else {
//       console.log("No data available");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

export const fetchData = async ({table}) => {
    return axios.get(`${firebaseConfig.databaseURL}/${table}.json`)
      .then(response => {
        // console.log(response.data);
        return response.data;
      })
      .catch(() => {
        console.log('something get wrong');
      })
};


