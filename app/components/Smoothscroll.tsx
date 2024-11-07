"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
