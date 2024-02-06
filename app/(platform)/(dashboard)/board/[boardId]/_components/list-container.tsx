"use client";

import { ListWithCards } from "@/types";
import { useEffect, useState } from "react";
import ListForm from "./list-form";
import ListItem from "./list-item";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

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
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
