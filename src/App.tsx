import React, { useEffect } from "react";
import Navigation from "./navigation/Navigation";
import Lenis from "lenis";

const App: React.FC = () => {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      // smoothTouch is false by default, but keeping it for clarity
      anchors: {
        offset: -100,
      },
    });

    let rafId: number;

    // 2. Define the Animation Frame function
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    // 3. Start the loop
    rafId = requestAnimationFrame(raf);

    // 4. Cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId); // Stop the loop to prevent memory leaks
    };
  }, []);

  return (
    <>
      <Navigation />
      {/* Ensure you have enough content here to actually see the scroll effect! */}
      {/* <main style={{ height: "200vh" }}>
        <h1>Smooth Scrolling Active</h1>
      </main> */}
    </>
  );
};

export default App;
