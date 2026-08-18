export function Mark({ size = 38 }: { size?: number }) {
  const inner = size * 0.75;
  const radius = inner * 0.3;
  const offset = inner / 3;
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
          background: "var(--field)",
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
          background: "var(--amber)",
        }}
      />
    </div>
  );
}
