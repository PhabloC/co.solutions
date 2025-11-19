// src/components/icons/NodejsIcon.tsx
import type { SVGProps } from "react";

export default function NodejsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1.5 15.5h-1v-5h2.5c1.38 0 2.5-1.12 2.5-2.5S14.88 7.5 13.5 7.5H9.5v9.5H8V6h5.5c2.21 0 4 1.79 4 4s-1.79 4-4 4H10v3.5z" />
    </svg>
  );
}
