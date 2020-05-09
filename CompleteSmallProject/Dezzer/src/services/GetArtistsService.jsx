import { ApiPaths } from "../helpers/ApiConstants";
import axios from "axios";

export const getAristsServices = {
  getArtists
};

async function getArtists(genreId) {
  const options = {
    method: "get",
    url: `${ApiPaths.AlbumsById}${genreId}/artists`,

    transformResponse: [
      data => {
        return data;
      }
    ]
  };
  console.log(options);
  return axios(options);
}
