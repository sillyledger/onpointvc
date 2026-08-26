export function Mark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <rect x="16" y="16" width="14" height="14" rx="2" fill="var(--text)" transform="rotate(45 23 23)" />
      <rect x="4" y="8" width="12" height="12" rx="2" fill="var(--red)" opacity="0.85" transform="rotate(45 10 14)" />
      <rect x="28" y="8" width="12" height="12" rx="2" fill="var(--red)" opacity="0.85" transform="rotate(45 34 14)" />
      <rect x="14" y="30" width="12" height="12" rx="2" fill="var(--red)" opacity="0.5" transform="rotate(45 20 36)" />
      <rect x="30" y="30" width="12" height="12" rx="2" fill="var(--text)" opacity="0.5" transform="rotate(45 36 36)" />
    </svg>
  );
}
