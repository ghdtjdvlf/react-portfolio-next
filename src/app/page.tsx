"use client";

import { HeroParallax } from "./components/ui/hero-parallax";
import Sec02 from "./components/Sec02/Sec02";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/ui/ShootingStarsAndStarsBackgroundDemo";
import { products } from "./products/products";

export default function Home() {
  return (
    <main>
      <HeroParallax products={products} />
      <Sec02 />
      <ShootingStarsAndStarsBackgroundDemo />
    </main>
  );
}
