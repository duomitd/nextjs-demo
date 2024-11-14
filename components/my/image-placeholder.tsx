import React from "react";

interface PlaceholderProps {
  width: number;
  height: number;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function Placeholder({
  width,
  height,
  text = `${width}x${height}`,
  backgroundColor = "#e2e8f0",
  textColor = "#64748b",
}: PlaceholderProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={backgroundColor} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontSize={Math.min(width, height) / 10}
        fontFamily="Arial, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
}
