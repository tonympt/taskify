"use client";

import { ListWithCards } from "@/types";
import { useEffect, useState } from "react";
import ListForm from "./list-form";
import ListItem from "./list-item";

type ListContainerProps = {
  data: ListWithCards[];
  boardId: string;
};

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <ListForm />
    </ol>
  );
};

export default ListContainer;
