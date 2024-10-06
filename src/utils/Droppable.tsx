import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
  display: "flex",
  height: "inherit",
};

export function Droppable({ children } : {children: JSX.Element}) {
  const { setNodeRef } = useDroppable({
    id: "droppable"
  });

  return (
    <div ref={setNodeRef} style={{ ...CustomStyle }}>
      {children}
    </div>
  );
}
