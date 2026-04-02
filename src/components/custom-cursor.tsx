"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(!!el.closest("a, button, [data-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* dot */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full bg-black transition-transform duration-75"
        style={{
          width: 6,
          height: 6,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* ring */}
      <div
        className="fixed z-[9998] pointer-events-none rounded-full border border-black transition-all duration-200 ease-out"
        style={{
          width: isHovering ? 44 : 28,
          height: isHovering ? 44 : 28,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: 0.6,
        }}
      />
    </>
  );
}
