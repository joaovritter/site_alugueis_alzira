import { Instagram, Facebook, MapPin } from 'lucide-react'
import { WhatsAppIcon } from './icons'
import { CONTACT, whatsappLink } from '../data/apartments'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <img className="footer-logo" src="/brand/logo-light.png" alt="Alzira Ritter" />
        <p style={{ maxWidth: '40ch', margin: '0 auto' }}>
          Aluguéis de verão em Capão da Canoa — Litoral Norte do Rio Grande do Sul.
        </p>

        <div className="footer-socials">
          <a
            href={whatsappLink('Olá Alzira! Vim pelo site.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon width={20} height={20} />
          </a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href={CONTACT.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={20} />
          </a>
        </div>

        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem' }}>
          <MapPin size={15} /> Rua Guaraci, 1535 &nbsp;·&nbsp; Rua Sepé, 1542 — Capão da Canoa/RS
        </p>

        <div className="divider" />
        <small>© {year} Alzira Ritter — Aluguéis de Verão. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}
