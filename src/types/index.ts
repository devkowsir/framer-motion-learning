import { FC } from "react";

export type Challange = {
  id: string;
  name: string;
  description: string;
  path: string;
  Component: FC;
};
