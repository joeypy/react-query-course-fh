import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issues as Issue } from "../interfaces/issues.interfaces";

export const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi<Issue>(`/issues/${issueNumber}`, {
    headers: { Authorization: null },
  });
  console.log(data);
  return data;
};

export const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi<Issue[]>(`/issues/${issueNumber}/comments`, {
    headers: { Authorization: null },
  });
  console.log(data);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(["issues", issueNumber], () =>
    getIssue(issueNumber)
  );
  const commentsQuery = useQuery(
    ["issues", issueNumber, "comments"],
    () => getIssueComments(issueQuery.data!.number),
    { enabled: issueQuery.data !== undefined }
  );

  return { issueQuery, commentsQuery };
};
