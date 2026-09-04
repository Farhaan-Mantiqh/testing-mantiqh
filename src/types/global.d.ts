import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    lenis?: Lenis;
    ScrollTrigger?: typeof ScrollTrigger;
  }
}
