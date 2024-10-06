import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { ReactElement } from "react";
import { isMobile } from "react-device-detect";

const CustomStyle = {
  width: "auto",
  height: "inherit",
};

export function Draggable({ id, children, styles }: { id: UniqueIdentifier, children: ReactElement | ReactElement[], styles: object }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: isMobile ? true : false,
  });

  const style = transform
    ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
    : {};

  return (
    <div
      style={{ ...style, ...CustomStyle, ...styles }}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
