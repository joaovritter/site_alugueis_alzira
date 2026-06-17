import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import Lightbox from './Lightbox'

export default function Gallery({ photos }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [selected, setSelected] = useState(0)
  const [lbIndex, setLbIndex] = useState(null)

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
    embla.on('reInit', onSelect)
  }, [embla, onSelect])

  const scrollTo = useCallback((i) => embla && embla.scrollTo(i), [embla])
  const THUMB_COUNT = 4 // numero de miniaturas antes do botao "+N"

  return (
    <div className="gallery">
      <div className="embla" ref={emblaRef}>
        <div className="embla-container">
          {photos.map((p, i) => (
            <div className="embla-slide" key={p.src}>
              <img
                src={p.src}
                alt={p.caption}
                loading={i === 0 ? 'eager' : 'lazy'}
                onClick={() => setLbIndex(i)}
              />
              <div className="embla-cap">
                <Camera /> {p.caption}
              </div>
            </div>
          ))}
        </div>

        <button
          className="embla-btn prev"
          aria-label="Foto anterior"
          onClick={() => embla && embla.scrollPrev()}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="embla-btn next"
          aria-label="Próxima foto"
          onClick={() => embla && embla.scrollNext()}
        >
          <ChevronRight size={22} />
        </button>
        <span className="embla-counter">
          {selected + 1} / {photos.length}
        </span>
      </div>

      <div className="thumbs">
        {photos.slice(0, THUMB_COUNT).map((p, i) => (
          <button
            key={p.src}
            className={`thumb ${selected === i ? 'active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para ${p.caption}`}
          >
            <img src={p.src} alt={p.caption} loading="lazy" />
          </button>
        ))}
        {photos.length > THUMB_COUNT && (
          <button
            className="thumb more"
            onClick={() => setLbIndex(THUMB_COUNT)}
            aria-label="Ver todas as fotos"
          >
            +{photos.length - THUMB_COUNT} fotos
          </button>
        )}
      </div>

      <Lightbox
        photos={photos}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onIndex={setLbIndex}
      />
    </div>
  )
}
