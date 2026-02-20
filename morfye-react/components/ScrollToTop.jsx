import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [launching, setLaunching] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    setLaunching(true)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setLaunching(false)
    }, 400)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="scrollTopBtn"
          title="Go to top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{
            y: -8,
            boxShadow: '0 12px 30px rgba(255, 146, 43, 0.5)',
          }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {/* Arrow SVG */}
          <motion.svg
            width="20" height="20" viewBox="0 0 20 20" fill="none"
            animate={launching ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <path d="M10 16V4M10 4L4 10M10 4L16 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* Flame trail on launch */}
          <AnimatePresence>
            {launching && (
              <motion.div
                className="scroll-btn-flame"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>

          {/* Hover ring pulse */}
          <motion.div
            className="scroll-btn-ring"
            initial={false}
            whileHover={{
              scale: [1, 1.6],
              opacity: [0.4, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
