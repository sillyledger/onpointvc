export function Mark({ size = 38 }: { size?: number }) {
  const inner = size * 0.79;
  const radius = size * 0.21;
  const offset = size * 0.29;
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
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
          left: offset,
          width: inner,
          height: inner,
          borderRadius: radius,
          background: "var(--amber)",
        }}
      />
    </div>
  );
}
