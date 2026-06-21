import { useEffect } from "react";

export const useReveal = (): void => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};
