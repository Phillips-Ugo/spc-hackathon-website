(function () {
  /* ── Scroll-reveal ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".demos, .about, .use-cases, .tech, .team")
    .forEach((s) => observer.observe(s));

  /* ── Force video looping and autoplay ── */
  document.querySelectorAll("video").forEach((v) => {
    v.loop = true;
    v.muted = true;
    v.addEventListener("ended", () => {
      v.currentTime = 0;
      v.play();
    });
    v.play().catch(() => {});
  });
})();
