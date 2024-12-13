import { useNavigate, useParams } from "react-router-dom";
import { ListChallanges } from "../components/list-challanges.tsx";
import type { Challange } from "../types/index.ts";

const challangeList: Challange[] = [];

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
