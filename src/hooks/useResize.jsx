import { useEffect, useState } from "react";

function useResize(size = 550) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {

      setIsMobile(window.innerWidth <= size);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return isMobile;
}

export default useResize;
