const icons = {
  menu: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  ),
  close: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  ),
}

export function NavbarIcon({ name }) {
  return icons[name]
}