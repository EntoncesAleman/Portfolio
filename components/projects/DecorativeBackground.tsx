import { Sparkle } from "@phosphor-icons/react/dist/ssr";

const SHAPES = [
  { top: "8%", left: "4%", size: 22, delay: "0s", duration: "7s", rotate: "-12deg" },
  { top: "16%", left: "90%", size: 16, delay: "1.2s", duration: "6s", rotate: "10deg" },
  { top: "58%", left: "2%", size: 18, delay: "2.1s", duration: "8s", rotate: "6deg" },
  { top: "72%", left: "94%", size: 24, delay: "0.6s", duration: "7.5s", rotate: "-8deg" },
  { top: "38%", left: "96%", size: 14, delay: "1.8s", duration: "6.5s", rotate: "14deg" },
  { top: "88%", left: "40%", size: 16, delay: "0.3s", duration: "9s", rotate: "-4deg" },
];

export function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--text) 0, var(--text) 2px, transparent 2px, transparent 14px)",
        }}
      />
      {SHAPES.map((shape, index) => (
        <Sparkle
          key={index}
          weight="fill"
          className="decorative-float absolute text-[var(--text-muted)] opacity-25"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            animation: `float-slow ${shape.duration} ease-in-out infinite`,
            animationDelay: shape.delay,
            ["--float-rotate" as string]: shape.rotate,
          }}
        />
      ))}
    </div>
  );
}
