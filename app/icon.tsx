import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const inner = size.width * 0.79;
  const radius = size.width * 0.21;
  const offset = size.width * 0.29;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          background: "#121B8E",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: inner,
            height: inner,
            borderRadius: radius,
            background: "#1B2AE0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: offset,
            width: inner,
            height: inner,
            borderRadius: radius,
            background: "#FFB240",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
