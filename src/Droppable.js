import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
  display: "flex",
  height: "inherit",
};

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  });
  const style = {
    color: isOver ? "green" : undefined
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      {children}
    </div>
  );
}
