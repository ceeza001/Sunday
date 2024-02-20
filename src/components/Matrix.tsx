import React, { useEffect, useRef } from "react";

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 10);
    const targetWord = "Ceeza";
    const charArray = targetWord.split("");
    let drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const colors = ["#FD1502", "#FD1500"]; // Add your specific colors here
    let frameRate = 25;
    let lastFrameTime = Date.now();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const charIndex = (i * 3) % targetWord.length;
        const text = charArray[charIndex];

        // Use the specific colors with the first color being dominant
        const color = i === 0 ? colors[0] : colors[Math.floor(Math.random() * (colors.length - 1)) + 1];
        ctx.fillStyle = color;

        ctx.font = "15px monospace";
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;

      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return <canvas className="absolute top-0 left-0 w-full h-full z-[-1]" ref={canvasRef}></canvas>;
};

export default Matrix;