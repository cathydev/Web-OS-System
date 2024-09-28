import { useDraggable } from "@dnd-kit/core";
import { IsItMobile } from "./utils";

const CustomStyle = {
  width: "100%",
  height: "inherit",
};

export function Draggable({ id, children, styles }) {
  const isMobile = IsItMobile();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: isMobile ? true : false
  });

  const style = transform
    ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
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
