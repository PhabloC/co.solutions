// src/components/icons/TypeScriptIcon.tsx
import type { SVGProps } from "react";

export default function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16.5 13.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3h3v-1.5zm-11.25-6v1.5h3c0 .825-.375 1.575-1.05 2.025.825.45 1.8 1.275 1.8 2.775 0 1.95-1.575 3.225-3.975 3.225-2.325 0-4.05-1.575-4.05-3.825 0-1.95 1.275-3.3 3.075-3.675.675-.975.975-1.275.975-1.95 0-.525-.375-.825-1.05-.825-.675 0-1.125.375-1.275 1.125l-1.425-.375C5.7 7.65 7.05 6.75 8.7 6.75c1.725 0 2.925 1.05 2.925 2.625v.075zM9.3 12.825c-.975.45-1.65 1.125-1.65 2.1 0 1.125.975 1.95 2.475 1.95 1.425 0 2.475-.975 2.475-2.325 0-1.275-.825-1.875-2.1-2.175-.075-.075-1.2-.45-1.2-.45z" />
    </svg>
  );
}
