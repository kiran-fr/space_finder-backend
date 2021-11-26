import axios from "axios";
import {envUrl} from '../constants/allConstants';

export const getUserApi = async (): Promise<any> => {
  try {
   return  await axios.get(
      `${envUrl}/getusers`
    );

  } catch (error) {
    console.log(error);
    return error;
  }
};
