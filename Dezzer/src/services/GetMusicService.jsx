import { ApiPaths } from "../helpers/ApiConstants";
import axios from "axios";

export const getMusicGenresService = {
  getMusicGenres
};

async function getMusicGenres() {
  const options = {
    method: "get",
    url: ApiPaths.GetMusicGenres,
    transformResponse: [
      data => {
        return data;
      }
    ]
  };

  return axios(options);
}
