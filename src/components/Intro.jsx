import { useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Intro: logo grande no centro que voa ate a posicao real do logo da navbar.
export default function Intro() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem('introSeen')
  })
  // start = transform que leva o logo (ancorado na navbar) ate o centro, ampliado.
  const [start, setStart] = useState(null)

  useLayoutEffect(() => {
    if (!show) return
    const nav = document.querySelector('.nav-logo')
    if (!nav) {
      setShow(false)
      return
    }
    const r = nav.getBoundingClientRect()
    const imgCx = r.left + r.width / 2
    const imgCy = r.top + r.height / 2
    // Escala limitada por altura E largura, para nunca estourar a tela no mobile.
    const byHeight = (window.innerHeight * 0.36) / r.height
    const byWidth = (window.innerWidth * 0.78) / r.width
    const scale = Math.max(1.6, Math.min(5, byHeight, byWidth))
    setStart({
      left: r.left,
      top: r.top,
      width: r.width,
      height: r.height,
      dx: window.innerWidth / 2 - imgCx,
      dy: window.innerHeight / 2 - imgCy,
      scale,
    })
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [show])

  const finish = () => {
    sessionStorage.setItem('introSeen', '1')
    document.body.style.overflow = ''
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && start && (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <motion.div
            className="intro-veil"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 2.3, ease: 'easeInOut' }}
          />
          <motion.img
            className="intro-logo"
            src="/brand/logo-light.png"
            alt="Alzira Ritter Aluguéis de Verão"
            style={{
              left: start.left,
              top: start.top,
              width: start.width,
              height: start.height,
            }}
            initial={{ x: start.dx, y: start.dy, scale: start.scale, opacity: 0 }}
            animate={{
              // 1) centro, ampliado, aparecendo  2) segura visivel  3) voa p/ navbar
              x: [start.dx, start.dx, start.dx, 0],
              y: [start.dy, start.dy, start.dy, 0],
              scale: [start.scale, start.scale, start.scale, 1],
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              duration: 2.9,
              times: [0, 0.18, 0.5, 1],
              ease: [0.65, 0, 0.35, 1],
            }}
            onAnimationComplete={finish}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
