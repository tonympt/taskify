"use-client";

import { ListWithCards } from "@/types";

type ListContainerProps = {
  data: ListWithCards[];
  boardId: string;
};

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return <div>List Container</div>;
};

export default ListContainer;
