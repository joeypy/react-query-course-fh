import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization: "Bearer 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"
  }
});
