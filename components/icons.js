// Lightweight inline SVG icon set — no external icon font/library needed.
// Each icon inherits color via currentColor so it follows the card's theme.

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const icons = {
  store: (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M4 9.5 5.2 4h13.6l1.2 5.5" />
      <path d="M4 9.5a2.2 2.2 0 0 0 4.4.2 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4-.2" />
      <path d="M5.5 9.8V20h13V9.8" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" {...common}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="m20.2 4.5-16.6 6.8c-.9.4-.9 1.6.1 1.9l4 1.3 1.6 5c.3.9 1.4 1.1 2 .4l2.3-2.5 4.3 3.2c.8.6 2 .2 2.2-.8l2.6-13.6c.3-1.2-.9-2.1-2-1.7Z" />
      <path d="m8 14.4 9.7-7.6-8 8.4" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a7.9 7.9 0 0 0 1.1 4Z" />
      <path d="M9 9.5c0 3.5 2.9 6 6 6l1-1.8-2.3-1-1 1a5.4 5.4 0 0 1-2.8-2.8l1-1-1-2.3Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" {...common}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="m10.5 9.7 4.4 2.3-4.4 2.3Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M4 5.5h16v10H9.5L5.5 19v-3.5H4Z" />
      <path d="M8 9.5h8M8 12.3h5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M6 3.5h3l1.4 4-2 1.6a11.5 11.5 0 0 0 6.5 6.5l1.6-2 4 1.4v3a1.6 1.6 0 0 1-1.7 1.6A16.5 16.5 0 0 1 4.4 5.2 1.6 1.6 0 0 1 6 3.5Z" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 12.6 4.9a3.6 3.6 0 1 1 5 5L16 11.5" />
      <path d="M13 17.5l-1.6 1.6a3.6 3.6 0 1 1-5-5L8 12.5" />
    </svg>
  ),
};

export function getIcon(name) {
  return icons[name] || icons.link;
}
