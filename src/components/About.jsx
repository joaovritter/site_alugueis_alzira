import { Waves, Building2, ShieldCheck, Sun } from 'lucide-react'
import Reveal from './Reveal'

const STATS = [
  { icon: Building2, num: '2', label: 'Apartamentos exclusivos' },
  { icon: Waves, num: '≤ 2', label: 'Quadras do mar' },
  { icon: Sun, num: '100%', label: 'Clima de verão' },
  { icon: ShieldCheck, num: 'Direto', label: 'Com a proprietária' },
]

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            Bem-vindo
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">Aluguéis de Verão em Capão da Canoa</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead">
            Com a <strong>Alzira Ritter</strong> você reserva direto com quem cuida de cada
            detalhe. São dois apartamentos mobiliados e bem cuidados, em ótima localização —
            pertinho da praia, da Praça Flávio Boianovski e de todo o comércio. Tudo pensado
            para a sua família aproveitar o litoral com tranquilidade.
          </p>
        </Reveal>

        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <div className="stat">
                <s.icon />
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
