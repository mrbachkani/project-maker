import React from 'react';

/**
 * A simple card component with an optional title and content area.  Use this as a
 * container for grouped UI elements.  The card is styled with Tailwind CSS.
 *
 * @param {Object} props
 * @param {string} [props.title] The title displayed at the top of the card.
 * @param {React.ReactNode} props.children The card's content.
 */
export function Card({ title, children }) {
  return (
    <div className="p-4 rounded-2xl shadow bg-white">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}