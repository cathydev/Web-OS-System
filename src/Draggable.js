import React from "react";
import { useDraggable } from "@dnd-kit/core";

const CustomStyle = {
  width: "100%",
  height: "630px",
};

export function Draggable({ id, children, styles }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...CustomStyle, ...styles }}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
