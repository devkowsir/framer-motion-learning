import { Link } from "react-router-dom";

export const ListChallanges = ({ challangeList }: { challangeList: { id: string; name: string; path: string }[] }) => {
  return (
    <div>
      <h2>Choose A Challange to View</h2>
      <ul>
        {challangeList.map(({ id, name, path }) => (
          <li key={id}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
