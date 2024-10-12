import api from "../../../api";

export const getGifValidation = async (uuid: string) => {
  const response = await api.get(`/api/check/uuid/${uuid}/`);

  console.log(response.data, "get");
  return response.data;
};
