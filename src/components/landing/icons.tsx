type IconProps = {
  className?: string;
};

function StrokeIcon({
  className = "",
  children,
  viewBox = "0 0 24 24",
}: IconProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GoogleIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.97 11.97 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

export function LogoIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sc-logo" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#sc-logo)" />
      <path
        d="M20 8l2.4 6.6L29 17l-6.6 2.4L20 26l-2.4-6.6L11 17l6.6-2.4L20 8z"
        fill="#fff"
      />
      <circle cx="27.5" cy="27.5" r="3" fill="#fff" opacity="0.9" />
    </svg>
  );
}

export function SparklesIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </StrokeIcon>
  );
}

export function PresentationIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 3h18" />
      <path d="M4 3v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3" />
      <path d="M12 16v5" />
      <path d="M9 21h6" />
    </StrokeIcon>
  );
}

export function ImageIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-4.5-4.5L6 21" />
    </StrokeIcon>
  );
}

export function DownloadIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </StrokeIcon>
  );
}

export function PaletteIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 21a9 9 0 1 1 9-9c0 2.5-2 3-3.5 3H15a2 2 0 0 0-1.5 3.3c.4.5.6 1.1.3 1.7-.5 1-1.5 1-1.8 1z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </StrokeIcon>
  );
}

export function UsersIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </StrokeIcon>
  );
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowDownIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </StrokeIcon>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className} viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </StrokeIcon>
  );
}

export function StarIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function MenuIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </StrokeIcon>
  );
}

export function CloseIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </StrokeIcon>
  );
}

export function WandIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 20l11-11" />
      <path d="M15 4l5 5" />
      <path d="M6 4l1 2.5L9.5 8 6 9 5 11.5 4 9 1.5 8 4 6.5 6 4z" />
      <path d="M18 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </StrokeIcon>
  );
}

export function PenIcon({ className = "" }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </StrokeIcon>
  );
}

export function QuoteIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3zm0 0c.6 1.2 2 3 3 4.5M14 7h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3zm0 0c-.6 1.2-2 3-3 4.5" />
    </svg>
  );
}

export function GithubIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12v3.14c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function XIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}
