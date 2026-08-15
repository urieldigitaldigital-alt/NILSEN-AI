import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const LOGO_SVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="20%" y1="10%" x2="80%" y2="90%">
      <stop offset="0%" stop-color="#B8F3FA"/>
      <stop offset="45%" stop-color="#3FDDF2"/>
      <stop offset="100%" stop-color="#00B4D8"/>
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="178" rx="40" ry="6" fill="#BEEFF7"/>
  <g transform="rotate(-26 100 100)">
    <ellipse cx="100" cy="100" rx="72" ry="40" fill="none" stroke="url(#g)" stroke-width="16"/>
  </g>
  <path d="M100,58 L109,83 L134,92 L109,101 L100,126 L91,101 L66,92 L91,83 Z" fill="#F2FDFF" stroke="#6FD4EA" stroke-width="1.5"/>
  <path d="M146,38 L149.6,47.6 L159,51.5 L149.6,55.4 L146,65 L142.4,55.4 L133,51.5 L142.4,47.6 Z" fill="#F2FDFF" stroke="#6FD4EA" stroke-width="1.5"/>
</svg>`;

const LOGO_DATA_URI = `data:image/svg+xml,${encodeURIComponent(LOGO_SVG)}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_DATA_URI} width={148} height={148} alt="" />
      </div>
    ),
    { ...size }
  );
}
