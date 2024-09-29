import { useDraggable } from "@dnd-kit/core";
import { IsItMobile } from "./utils";

const CustomStyle = {
  width: "auto",
  height: "inherit",
};

export function Draggable({ id, children, styles, disabled }) {
  const isMobile = IsItMobile();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: disabled || isMobile ? true : false
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
