// import { Suspense } from "react";

import db from "@/lib/db";
import Form from "./form";

// import { Separator } from "@/components/ui/separator";

// import { Info } from "./_components/info";
// import { BoardList } from "./_components/board-list";
// import { checkSubscription } from "@/lib/subscription";

const OrganizationIdPage = async () => {
  // const isPro = await checkSubscription();
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-2">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>Board Title : {board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
