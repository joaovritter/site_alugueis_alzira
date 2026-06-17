import { whatsappLink } from '../data/apartments'
import { WhatsAppIcon } from './icons'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Olá Alzira! Vim pelo site e gostaria de informações sobre os apartamentos.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <span className="wa-pulse" />
      <WhatsAppIcon width={30} height={30} />
    </a>
  )
}
