import type { SVGProps } from "react";

function Icon({ size = 16, children, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const DownloadIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M12 4v12M6 11l6 6 6-6M5 20h14" />
  </Icon>
);
export const ArrowLeftIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M15 5l-7 7 7 7" />
  </Icon>
);
export const ArrowRightIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M9 5l7 7-7 7" />
  </Icon>
);
export const ExternalIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M7 17L17 7M9 7h8v8" />
  </Icon>
);
export const CodeIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
  </Icon>
);
export const CloseIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);
export const MenuIcon = (p: { size?: number }) => (
  <Icon {...p}>
    <path d="M4 8h16M4 16h16" />
  </Icon>
);
