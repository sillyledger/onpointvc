export function Mark({ size = 34 }: { size?: number }) {
  const inner = size * (24 / 34);
  const radius = size * (7 / 34);
  const offset = size * (9 / 34);
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      <span
        style={{
          position: "absolute",
          top: offset,
          left: offset,
          width: inner,
          height: inner,
          borderRadius: radius,
          background: "var(--text)",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: inner,
          height: inner,
          borderRadius: radius,
          background: "var(--panel)",
        }}
      />
    </div>
  );
}
