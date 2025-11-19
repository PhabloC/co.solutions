// src/components/icons/NextjsIcon.tsx
import type { SVGProps } from "react";

export default function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 15.5L15 9M15 9v5.5M15 9H9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
