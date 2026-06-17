import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { CONTACT, whatsappLink } from '../data/apartments'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#florenca', label: 'Florença' },
  { href: '#andorinha', label: 'Andorinha' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logo = scrolled ? '/brand/logo-dark.png' : '/brand/logo-light.png'

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#topo" aria-label="Alzira Ritter — início">
            <img className="nav-logo" src={logo} alt="Alzira Ritter Aluguéis de Verão" />
          </a>

          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              className="nav-cta"
              href={whatsappLink(
                'Olá Alzira! Vim pelo site e gostaria de informações sobre os apartamentos.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle /> Orçamento
            </a>
            <button
              className="nav-burger"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="mm-close"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <X size={32} />
            </button>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="btn btn-gold"
              href={whatsappLink('Olá Alzira! Gostaria de um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <MessageCircle /> Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
