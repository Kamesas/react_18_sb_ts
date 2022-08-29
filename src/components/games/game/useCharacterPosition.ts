import { useEffect, useState } from "react";

export function useCharacterPosition(step: any) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case "ArrowLeft":
          setLeft((prev) => prev - step);
          setDirection("left");
          break;
        case "ArrowRight":
          setLeft((prev) => prev + step);
          setDirection("right");
          break;
        case "ArrowUp":
          setTop((prev) => prev - step);
          break;
        case "ArrowDown":
          setTop((prev) => prev + step);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]);

  return [left, top, direction];
}
