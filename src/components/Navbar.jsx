import { useState } from 'react'
import { NavbarIcon } from './common/svg.jsx'
function Navbar({ brandName, links }) {
  const [open, setOpen] = useState(false)
  return (
    <nav
      aria-label="Main navigation"
      className="relative flex w-full flex-wrap items-center justify-between rounded-none bg-blue-500 px-10 py-5 text-white"
    >
      <a className="text-3xl font-extrabold" href="#home">
        {brandName}
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="relative z-30 grid size-10 cursor-pointer place-items-center rounded-lg hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        onClick={() => setOpen((open) => !open)}
        type="button"
      >
        <NavbarIcon name={open ? 'close' : 'menu'} />
      </button>
      <ul
        className={`fixed right-0 top-0 z-20 flex h-screen w-1/2 flex-col gap-4 bg-blue-500 px-4 pt-20 shadow-xl transition-transform duration-300 ease-in-out md:static md:z-auto md:h-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-14 md:bg-transparent md:p-0 md:shadow-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="primary-navigation"
      >
        {links.map((link) => (
          <li key={link.id}>
            <a
              className="relative block rounded-md px-3 py-2 text-base font-semibold text-slate-200 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:bg-blue-300 hover:text-white hover:font-bold duration-300 md:hover:bg-transparent md:after:left-0 md:after:right-0"
              href={link.href}
              onClick={() => setOpen(false)} >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar