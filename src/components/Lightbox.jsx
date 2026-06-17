import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ photos, index, onClose, onIndex }) {
  const open = index !== null && index >= 0

  const prev = useCallback(
    (e) => {
      e?.stopPropagation()
      onIndex((index - 1 + photos.length) % photos.length)
    },
    [index, photos.length, onIndex],
  )
  const next = useCallback(
    (e) => {
      e?.stopPropagation()
      onIndex((index + 1) % photos.length)
    },
    [index, photos.length, onIndex],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, prev, next])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="lb-close" aria-label="Fechar" onClick={onClose}>
            <X size={34} />
          </button>
          <button className="lb-nav prev" aria-label="Anterior" onClick={prev}>
            <ChevronLeft size={30} />
          </button>

          <motion.img
            key={index}
            className="lb-img"
            src={photos[index].src}
            alt={photos[index].caption}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          <button className="lb-nav next" aria-label="Próxima" onClick={next}>
            <ChevronRight size={30} />
          </button>

          <p className="lb-cap" onClick={(e) => e.stopPropagation()}>
            {photos[index].caption} · {index + 1}/{photos.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
