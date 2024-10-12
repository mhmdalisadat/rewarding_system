import { useMutation } from "@tanstack/react-query";
import api from "../../../api";
import { Gift } from "../types";

const PostGift = async (answer: number, uuid: string|undefined): Promise<Gift> => {
  const response = await api.post(`/api/gift/${uuid}/`, { answer });
  return response.data;
};

const usePostGift = (uuid: string|undefined) => {
  const { data, error, isPending, isSuccess, isError, mutate } = useMutation({
    mutationKey: ["postGift"],
    mutationFn: (answer: number) => PostGift(answer, uuid),
  });
  return { data, error, isPending, isSuccess, isError, mutate };
};
export default usePostGift;
