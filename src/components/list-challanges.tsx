import { Link } from "react-router-dom";
import { Challange } from "../types";

export const ListChallanges = ({ challangeList }: { challangeList: Challange[] }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold text-base-content/50">Choose A Challange to View</h2>
      <ol className="text-sm list-decimal list-inside">
        {challangeList.map(({ id, name }) => (
          <li key={id}>
            <Link to={id} className="btn btn-link btn-sm">
              {name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
