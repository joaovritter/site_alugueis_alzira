import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Waves, MapPin, KeyRound } from 'lucide-react'
import { whatsappLink } from '../data/apartments'

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <header className="hero" id="topo">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <motion.span custom={0} variants={fade} initial="hidden" animate="show" className="eyebrow">
          Capão da Canoa · Litoral Norte · RS
        </motion.span>

        <motion.h1 custom={1} variants={fade} initial="hidden" animate="show">
          Sua temporada de verão <span className="accent">à beira-mar</span>
        </motion.h1>

        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="hero-sub">
          Dois apartamentos aconchegantes e bem localizados, a poucos passos da praia e
          do centro. Conforto, segurança e aquela vista que faz a sua viagem inesquecível.
        </motion.p>

        <motion.div custom={3} variants={fade} initial="hidden" animate="show" className="hero-actions">
          <a className="btn btn-gold" href="#apartamentos">
            <KeyRound /> Ver apartamentos
          </a>
          <a
            className="btn btn-ghost"
            href={whatsappLink('Olá Alzira! Vim pelo site e gostaria de um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle /> Falar no WhatsApp
          </a>
        </motion.div>

        <motion.div custom={4} variants={fade} initial="hidden" animate="show" className="hero-badges">
          <span className="hero-badge"><Waves /> A poucos passos do mar</span>
          <span className="hero-badge"><MapPin /> Próximo ao centro</span>
          <span className="hero-badge"><KeyRound /> Reserva direta com a proprietária</span>
        </motion.div>
      </div>

      <a className="hero-scroll" href="#sobre" aria-label="Rolar para baixo">
        Explore
        <ChevronDown size={20} />
      </a>
    </header>
  )
}
