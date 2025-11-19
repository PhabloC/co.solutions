// src/components/icons/FigmaIcon.tsx
import type { SVGProps } from "react";

export default function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path
        d="M12 1.5c-1.92 0-3.5 1.58-3.5 3.5v3h7v-3c0-1.92-1.58-3.5-3.5-3.5z"
        fill="#0ACF83"
      />
      <path
        d="M15.5 8.5h-7v7h7c1.92 0 3.5-1.58 3.5-3.5s-1.58-3.5-3.5-3.5z"
        fill="#A259FF"
      />
      <path
        d="M8.5 15.5h-3c-1.92 0-3.5-1.58-3.5-3.5s1.58-3.5 3.5-3.5h3v7z"
        fill="#FF7262"
      />
      <path
        d="M15.5 15.5c1.92 0 3.5-1.58 3.5-3.5v-3h-7v7h3.5z"
        fill="#F24E1E"
      />
      <path
        d="M8.5 8.5h7v3.5c0 1.92-1.58 3.5-3.5 3.5s-3.5-1.58-3.5-3.5V8.5z"
        fill="#1ABCFE"
      />
    </svg>
  );
}
