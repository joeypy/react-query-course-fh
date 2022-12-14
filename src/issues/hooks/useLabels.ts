import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { ILabel } from "../interfaces/labels.interfaces";

const getLabels = async (): Promise<ILabel[]> => {
  const { data } = await githubApi<ILabel[]>("/labels?per_page=100", {
    headers: { Authorization: null },
  });
  console.log(data);
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  return labelsQuery;
};
