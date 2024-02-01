"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data, "SUCCESS");
    },
    onError(error) {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <div>
      {/* <form action={onSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            title="title"
            name="title"
            required
            placeholder="Enter title"
            className="border p-1"
          />
       <FormInput errors={fieldErrors}>
        </div>
        <Button type="submit">Submit</Button>
      </form> */}
    </div>
  );
};

export default Form;
