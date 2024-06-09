import { firebaseConfig } from "./firebase";
import axios from "axios";

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


