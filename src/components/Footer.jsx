const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skill', label: 'Skills' },
  { href: '#Achievement', label: 'Achievements' },
  { href: '#Contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-300 mt-10 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        <div className="text-xs sm:text-sm font-semibold text-gray-700 order-3 md:order-1">
          © 2026 ALIN SHARMA. All rights reserved.
        </div>

        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 order-1 md:order-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-purple-600 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-gray-600 text-lg order-2 md:order-3">
          <a
            href="mailto:alinsharma1199@gmail.com"
            className="hover:text-purple-600 transition"
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://github.com/Alinsharma"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
