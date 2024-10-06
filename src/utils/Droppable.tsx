import { useDroppable } from "@dnd-kit/core";
import { ReactElement } from "react";

const CustomStyle = {
  display: "flex",
  height: "inherit",
};

export function Droppable({ children } : {children: ReactElement}) {
  const { setNodeRef } = useDroppable({
    id: "droppable"
  });

  return (
    <div ref={setNodeRef} style={{ ...CustomStyle }}>
      {children}
    </div>
  );
}
