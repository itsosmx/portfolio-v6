import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "OSMX Portfolio";
    const description = searchParams.get("description") || "Full-stack developer passionate about creating innovative web applications";

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "60px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              maxWidth: "900px",
              textAlign: "center",
            }}>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "800",
                color: "white",
                margin: "0 0 30px 0",
                lineHeight: "1.1",
              }}>
              {title}
            </h1>
            <p
              style={{
                fontSize: "28px",
                color: "rgba(255, 255, 255, 0.9)",
                margin: "0",
                lineHeight: "1.4",
              }}>
              {description}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              display: "flex",
              alignItems: "center",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "24px",
              fontWeight: "600",
            }}>
            osmx.me
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
