import { Link, useNavigate, useParams } from "react-router-dom";
import { ListChallanges } from "../components/list-challanges.tsx";
import type { Challange } from "../types/index.ts";
import { Challange_1 } from "./challange-1.tsx";
import { Challange_2 } from "./challange-2.tsx";
import { Challange_3 } from "./challange-3.tsx";

const ChallangeList: Challange[] = [Challange_1, Challange_2, Challange_3];

export const BasicChallanges = () => {
  return <ListChallanges challangeList={ChallangeList} />;
};

export const BasicChallange = () => {
  const navigate = useNavigate();
  const { challangeId } = useParams();

  const challangeIndex = ChallangeList.findIndex(({ id }) => challangeId == id);
  const challange = ChallangeList[challangeIndex];

  if (!challange) {
    navigate("/basic-challanges");
    return null;
  }

  const nextChallange = ChallangeList[challangeIndex + 1];
  const prevChallange = ChallangeList[challangeIndex - 1];

  return (
    <div className="h-full flex flex-col gap-4">
      {/* <challange.Component /> */}
      <div className="grow">
        <div className="text-base-content/60">
          <h1 className="text-lg font-bold">{challange.name}</h1>
          <p className="text-sm">{challange.description}</p>
        </div>
        <challange.Component />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        {prevChallange ? (
          <Link
            to={`/basic-challanges/${prevChallange.id}`}
            className="mr-auto flex flex-col bg-base-200 p-2 rounded-md shadow-md"
          >
            <span className="text-sm text-base-content/50">Prev</span>
            <span className="text-sm text-base-content/70 font-bold">{prevChallange.name}</span>
          </Link>
        ) : null}
        {nextChallange ? (
          <Link
            to={`/basic-challanges/${nextChallange.id}`}
            className="ml-auto flex flex-col text-right bg-base-200 p-2 rounded-md shadow-md"
          >
            <span className="text-sm text-base-content/50">Next</span>
            <span className="text-sm text-base-content/70 font-bold">{nextChallange.name}</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
