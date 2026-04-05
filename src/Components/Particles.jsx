import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 opacity-80"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 5 },
            repulse: { distance: 180, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#60a5fa", "#818cf8", "#a78bfa"] },
          links: {
            color: "#6366f1",
            distance: 160,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1.1,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 70 },
          opacity: { value: 0.45 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
