import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 12" aria-hidden="true" {...props}>
      <path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="8" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="m4.5 10.5 1.8-6h2.3l1.5 5.2M19.5 10.5l-1.8-6h-2.3l-1.5 5.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

export function DraftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m4 17 1.2-4.3L15.8 2.2l4 4L9.2 16.8 5 18l-1-1Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
      <path d="m13.7 4.3 4 4M4 21h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 21V9l7-4v16M11 21V2l8 3v16M2 21h20" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
      <path d="M7 12h1M7 16h1M14 8h1M14 12h1M14 16h1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m3 12 4-4 4 2 2-1.5 3 2.5 2-2 3 3-5 5-3-1-2 2-6-6-4 2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
      <path d="m8 13 4 3M10 11l5 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
    </svg>
  );
}
