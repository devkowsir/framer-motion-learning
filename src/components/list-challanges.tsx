import { Link } from "react-router-dom";
import { Challange } from "../types";

export const ListChallanges = ({ challangeList }: { challangeList: Challange[] }) => {
  return (
    <div>
      <h2>Choose A Challange to View</h2>
      <ul>
        {challangeList.map(({ id, name }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
