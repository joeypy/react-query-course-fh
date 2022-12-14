import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Issues } from "../interfaces/issues.interfaces";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Props {
  issue: Issues;
}

export const IssueComment: FC<Props> = ({ issue }) => {
  return (
    <div className="col-12">
      <div className="card border-white mt-2">
        <div className="card-header bg-dark">
          <img
            src={`${issue.user.avatar_url}`}
            alt="User Avatar"
            className="avatar"
          />
          <span className="mx-2">{issue.user.login} commented</span>
        </div>
        <div className="card-body text-dark">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {issue.body.replaceAll("<!--", "").replaceAll("-->", "")}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
