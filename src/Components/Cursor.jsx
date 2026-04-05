import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 330, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 330, damping: 35 });

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 h-10 w-10 rounded-full border border-white/20 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl shadow-blue-500/20 pointer-events-none"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default Cursor;
