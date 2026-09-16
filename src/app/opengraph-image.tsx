import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — You Drive. We Dispatch.`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B5D3B",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "1080px",
            height: "510px",
            borderRadius: "24px",
            border: "6px solid #F7F7F2",
            padding: "48px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#F7F7F2",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 40,
              fontWeight: 600,
              color: "#F7F7F2",
              textAlign: "center",
            }}
          >
            You Drive. We Dispatch.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
