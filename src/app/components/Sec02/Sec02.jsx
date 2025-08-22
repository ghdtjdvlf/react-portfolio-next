"use client";

import ScrollFloat from "../ui/Reactbits/ScrollFloat/ScrollFloat";
import ShapeBlur from "../ui/Reactbits/ShapeBlur/ShapeBlur";
import Sec02Style from "./Sec02.css";

export default function Sec02() {
  return (
    <section className="sec02" style={{ position: "relative" }}>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        센스 있게, 효율적으로.
      </ScrollFloat>

      <div
        style={{ position: "relative", height: "800px", overflow: "hidden" }}
      >
        <ShapeBlur
          variation={0}
          pixelRatioProp={
            typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
          }
          shapeSize={1}
          roundness={0.5}
          borderSize={0.05}
          circleSize={0.25}
          circleEdge={1}
        />
      </div>
    </section>
  );
}
