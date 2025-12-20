import { useState, useRef, useEffect } from "react";

export function useHoverRotate360() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const newRotation = (x / width) * 360;
      setRotation(newRotation);
    };

    const handleMouseLeave = () => setRotation(0);

    element.addEventListener("mousemove", handleMouseLeave);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ref, rotation };
}
