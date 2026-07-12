"use client";

import { useEffect } from "react";

export function usePaper() {
  function handlePaper(event: React.MouseEvent<HTMLButtonElement>) {
    const currGroup = event.currentTarget.parentElement as HTMLElement;
    const isActive = currGroup.classList.contains("active");

    if (!isActive) {
      currGroup.classList.add("active");
    } else {
      currGroup.classList.remove("active");
    }
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      const paperGroups = document.querySelectorAll(".paper-group");

      paperGroups.forEach((paperGroup) => {
        const paperButton = paperGroup.querySelector(".paper-button");

        if (paperButton && !paperButton.contains(event.target as Node)) {
          paperGroup.classList.remove("active");
        }
      });
    }

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return {
    handlePaper,
  };
}