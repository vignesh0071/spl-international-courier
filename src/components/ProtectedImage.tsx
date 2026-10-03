import React from 'react';

export interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * Reusable Protected Image component for SPL International Courier Solution.
 * Encapsulates unselectable, undraggable properties with controlled context-menu prevention.
 */
export const ProtectedImage: React.FC<ProtectedImageProps> = ({
  className = '',
  draggable = false,
  onContextMenu,
  ...props
}) => {
  return (
    <img
      draggable={draggable}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu?.(e);
      }}
      className={`select-none pointer-events-auto ${className}`.trim()}
      {...props}
    />
  );
};
