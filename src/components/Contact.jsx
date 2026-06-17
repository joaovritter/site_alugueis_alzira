import { Instagram, Facebook } from 'lucide-react'
import Reveal from './Reveal'
import { WhatsAppIcon } from './icons'
import { CONTACT, whatsappLink } from '../data/apartments'

export default function Contact() {
  const cards = [
    {
      icon: <WhatsAppIcon width={27} height={27} />,
      label: 'WhatsApp',
      value: CONTACT.whatsappDisplay,
      href: whatsappLink('Olá Alzira! Vim pelo site e gostaria de um orçamento.'),
    },
    {
      icon: <Instagram />,
      label: 'Instagram',
      value: CONTACT.instagramHandle,
      href: CONTACT.instagramUrl,
    },
    {
      icon: <Facebook />,
      label: 'Facebook',
      value: 'Alzira Ritter',
      href: CONTACT.facebookUrl,
    },
  ]

  return (
    <section className="section contact" id="contato">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            Fale com a gente
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">Reserve a sua temporada</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-lead">
            Tire suas dúvidas, consulte disponibilidade e valores. O atendimento é direto com
            a proprietária — rápido, próximo e sem intermediários.
          </p>
        </Reveal>

        <div className="contact-cards">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.1}>
              <a className="cc" href={c.href} target="_blank" rel="noopener noreferrer">
                <span className="cc-ico">{c.icon}</span>
                <div className="cc-label">{c.label}</div>
                <div className="cc-value">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="contact-big">
            <a
              className="btn btn-gold"
              href={whatsappLink('Olá Alzira! Quero reservar uma temporada. Pode me passar os valores?')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width={19} height={19} /> Pedir orçamento agora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
