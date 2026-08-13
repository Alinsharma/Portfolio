import { useState } from 'react'

const links = [
  { href: '#', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skill', label: 'Skill' },
  { href: '#Achievement', label: 'Achievement' },
  { href: '#Contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = () => setOpen(false)

  return (
    <nav className="border-t border-b mt-6 sm:mt-8 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile bar */}
        <div className="flex items-center justify-between py-3 md:hidden">
          <span className="text-sm font-semibold tracking-wide">Menu</span>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="border border-black px-3 py-1.5 text-sm font-medium hover:bg-gray-50 transition"
          >
            {open ? 'Close ✕' : 'Menu ☰'}
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex flex-wrap justify-center text-sm divide-x divide-black">
          {links.map((link) => (
            <li key={link.label} className="px-3 lg:px-4 py-3">
              <a
                href={link.href}
                className={
                  link.active ? 'text-purple-600 font-medium' : 'hover:text-purple-600'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-3 lg:px-4 py-3">
            <a
              href={`${import.meta.env.BASE_URL}Alin_resume.pdf`}
              download
              className="inline-block font-semibold hover:text-purple-600 transition duration-300"
            >
              ⬇️ Download My CV
            </a>
          </li>
        </ul>

        {/* Mobile dropdown */}
        {open && (
          <ul className="md:hidden flex flex-col border-t border-black text-sm pb-2">
            {links.map((link) => (
              <li key={link.label} className="border-b border-gray-200 last:border-b-0">
                <a
                  href={link.href}
                  onClick={handleNav}
                  className={`block px-2 py-3 ${
                    link.active
                      ? 'text-purple-600 font-medium'
                      : 'hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${import.meta.env.BASE_URL}Alin_resume.pdf`}
                download
                onClick={handleNav}
                className="block px-2 py-3 font-semibold hover:text-purple-600 hover:bg-gray-50"
              >
                ⬇️ Download My CV
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
