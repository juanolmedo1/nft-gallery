import axios from "axios";
import { INFTOpenSeaResponse } from "../store/nfts/types";

export const getAssetsByOwner = async (
  owner: string,
  limit: number
): Promise<INFTOpenSeaResponse | null> => {
  let response = null;
  const URL_WITH_OWNER = `https://api.opensea.io/api/v1/assets?owner=${owner}&limit=${limit}`;
  try {
    const { data } = await axios.get<INFTOpenSeaResponse>(URL_WITH_OWNER);
    response = data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
  return response;
};
