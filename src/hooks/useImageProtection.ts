import { useEffect } from 'react';

/**
 * Reusable client-side image protection hook for SPL International Courier Solution.
 *
 * Implements a non-intrusive client-side protection layer:
 * - Prevents default image dragging (`dragstart` cancellation and `draggable="false"`)
 * - Suppresses context menu ("Save image as...") specifically on `<img>` elements
 * - Preserves native right-click on non-image elements (text, buttons, inputs, links, background)
 * - Preserves standard text selection, keyboard accessibility, touch navigation, and Lenis scrolling
 */
export function useImageProtection(): void {
  useEffect(() => {
    // 1. Helper function to ensure draggable="false" on an image element
    const markImageProtected = (img: HTMLImageElement) => {
      if (img.getAttribute('draggable') !== 'false') {
        img.setAttribute('draggable', 'false');
      }
    };

    // Protect all existing <img> elements in the document
    document.querySelectorAll('img').forEach((el) => {
      markImageProtected(el as HTMLImageElement);
    });

    // 2. Observe DOM mutations so dynamically mounted images (route transitions, modals) are protected
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            markImageProtected(node);
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll('img').forEach((img) => {
              markImageProtected(img as HTMLImageElement);
            });
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // 3. Controlled context-menu handler: prevent ONLY when right-clicking directly on an image
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isImage = target.tagName === 'IMG' || Boolean(target.closest('img'));
      if (isImage) {
        e.preventDefault();
      }
    };

    // 4. Controlled drag-start handler: prevent native drag ONLY on images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isImage = target.tagName === 'IMG' || Boolean(target.closest('img'));
      if (isImage) {
        e.preventDefault();
      }
    };

    // Attach listeners with capture: true to intercept before default browser actions
    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);
}
