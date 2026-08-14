import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const markSize = 92;
  const inner = markSize * 0.79;
  const radius = markSize * 0.21;
  const offset = markSize * 0.29;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121B8E",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: markSize,
            height: markSize,
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
      </div>
    ),
    { ...size }
  );
}
