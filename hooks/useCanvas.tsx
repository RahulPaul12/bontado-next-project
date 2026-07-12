"use client";

const ACTIVE_CLASS = "canvas-active";
const HIDDEN_CLASS = "overflow-hidden";

export function useCanvas() {
  function openCanvas(targetId: string) {
    const targetElement = document.querySelector(`#${targetId}`);
    if (!targetElement) return;

    targetElement.classList.add(ACTIVE_CLASS);
    document.body.classList.add(HIDDEN_CLASS);
  }

  function closeCanvas(targetId: string) {
    const targetElement = document.querySelector(`#${targetId}`);
    if (!targetElement) return;

    targetElement.classList.remove(ACTIVE_CLASS);
    document.body.classList.remove(HIDDEN_CLASS);
  }

  function closeBackdrop(event: React.MouseEvent<HTMLDivElement>) {
    const containerElement = event.currentTarget.firstElementChild as HTMLElement;
    if (containerElement && !containerElement.contains(event.target as Node)) {
      event.currentTarget.classList.remove(ACTIVE_CLASS);
      document.body.classList.remove(HIDDEN_CLASS);
    }
  }

  return { openCanvas, closeCanvas, closeBackdrop };
}