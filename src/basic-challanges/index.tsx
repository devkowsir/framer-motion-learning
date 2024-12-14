import { useNavigate, useParams } from "react-router-dom";
import { ListChallanges } from "../components/list-challanges.tsx";
import type { Challange } from "../types/index.ts";
import { Challange as Challange_1 } from "./challange-1.tsx";

const challangeList: Challange[] = [
  {
    id: "1",
    name: "Fade In and Fade Out",
    description: "Create a box that fades in when the page loads and fades out when you click a button.",
    Component: Challange_1,
  },
];

export const BasicChallanges = () => {
  return (
    <div>
      <ListChallanges challangeList={challangeList} />
    </div>
  );
};

export const BasicChallange = () => {
  const navigate = useNavigate();
  const { challangeId } = useParams();

  const challange = challangeList.find(({ id }) => challangeId == id);
  if (!challange) {
    navigate("/basic-challanges");
    return null;
  }

  return (
    <div>
      <button onClick={() => navigate("/basic-challanges")}>All Challanges</button>
      <challange.Component />
      <div className="flex justify-between">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};
