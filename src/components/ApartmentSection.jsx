import {
  BedDouble,
  Bath,
  Car,
  Building2,
  Accessibility,
  MapPin,
  Check,
  Sparkles,
  MessageCircle,
  Navigation,
} from 'lucide-react'
import Reveal from './Reveal'
import Gallery from './Gallery'
import { whatsappLink } from '../data/apartments'

const ICONS = { BedDouble, Bath, Car, Building2, Accessibility }

export default function ApartmentSection({ apt }) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    apt.mapsQuery,
  )}&z=15&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    apt.mapsQuery,
  )}`
  const waMsg = `Olá Alzira! Tenho interesse no ${apt.name} (${apt.unit}). Gostaria de saber valores e disponibilidade.`

  return (
    <section className="section apt" id={apt.id}>
      <div className="container">
        <div className="apt-head">
          <div>
            <Reveal>
              <span className="apt-ref">{apt.ref}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="apt-title">
                {apt.name}
                <span className="apt-unit">{apt.unit}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="apt-tagline">{apt.tagline}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <span className="apt-address">
              <MapPin /> {apt.address}
            </span>
          </Reveal>
        </div>

        <div className="apt-grid">
          {/* coluna da galeria */}
          <div>
            <Reveal>
              <Gallery photos={apt.photos} />
            </Reveal>
          </div>

          {/* coluna de informacoes */}
          <div>
            <Reveal delay={0.1}>
              <div className="highlights">
                {apt.highlights.map((h) => {
                  const Ico = ICONS[h.icon] || Building2
                  return (
                    <div className="hl" key={h.label}>
                      <span className="hl-ico">
                        <Ico />
                      </span>
                      <div>
                        <div className="hl-label">{h.label}</div>
                        <div className="hl-detail">{h.detail}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="apt-intro">{apt.intro}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <span className="amenities-title">Comodidades</span>
              <div className="amenities">
                {apt.amenities.map((a) => (
                  <span className="chip" key={a}>
                    <Check /> {a}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <span className="diff-title">Diferenciais</span>
              <ul className="diff-list">
                {apt.differentials.map((d) => (
                  <li key={d}>
                    <Sparkles /> {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="apt-cta">
                <a
                  className="btn btn-gold"
                  href={whatsappLink(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Consultar valores
                </a>
                <span className="price-note">Valores sob consulta</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mapa */}
        <Reveal>
          <div className="apt-map">
            <span className="diff-title">Localização</span>
            <div className="map-frame">
              <iframe
                title={`Mapa — ${apt.name}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="map-actions">
              <a
                className="btn btn-outline"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation /> Abrir no Google Maps
              </a>
              <span className="apt-address">
                <MapPin /> {apt.address}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
